import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';

// Importing routes
import userRoutes from './routes/auth.js';
import courseRoutes from './routes/course.js';
import enrollRoutes from './routes/enroll.js';
import contactusRoutes from './routes/contact.js';
import users from './models/auth.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});


const allowedOrigins = ['http://localhost:3000', 'https://www.nanoquesttech.in','https://e-learning-1-jycy.onrender.com'];
app.use(cors({
  origin: function(origin, callback) {

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

app.use('/user', userRoutes);
app.use('/course', courseRoutes);
app.use('/enroll', enrollRoutes);
app.use('/contactus', contactusRoutes);

app.post("/order", async (req, res) => {
    try {
        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        });
        const options = req.body;
        const order = await razorpay.orders.create(options);

        if (!order) {
            return res.status(500).send("Error");
        }
        res.json(order);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error");
    }
});

app.post('/order/validate', async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const sha = crypto.createHmac("sha256", "3sNQy668X3KugreFfmHfvYqC");
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const signature = sha.digest("hex");
    if (signature !== razorpay_signature) {
        return res.status(400).json({ msg: "Transaction is not legit!" });
    }
    res.json({
        msg: "success",
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id
    });
});

app.get('/user/profile', async (req, res) => {
    const { email } = req.query;

    try {
        const user = await users.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server error' });
    }
});

// Connection to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(err));

// Server connection
app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`);
});
