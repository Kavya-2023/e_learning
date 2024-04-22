import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const Cart = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const paymentHandler = (e) => {
  e.preventDefault();

  // Fetch the enrolled courses and total cost
  const email = localStorage.getItem("email");
  const courseIds = enrolledCourses.map(course => course.course_id); 
  const totalAmount = totalCost * 100; // Convert total cost to cents

  // Make a request to create a new order
  axios.post(`http://localhost:5000/order`, {
    amount: totalAmount,
    currency: "INR",
    receipt: "sdfghbfg",
  })
  .then(response => {
    const order = response.data;

    // Configure Razorpay options
    var options = {
      key: "rzp_test_iIdXGzwGVLePDc",
      amount: order.amount,
      currency: order.currency,
      name: "Nanoquest LLP",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id,
      handler: function (response) {
        // Upon successful payment, enroll the user in the selected courses
        axios.post('http://localhost:5000/order/validate', response)
          .then(validateRes => {
            // If payment is validated successfully, proceed to course enrollment
            const orderId = validateRes.data.orderId;
            const paymentId = validateRes.data.paymentId;

            axios.post('http://localhost:5000/enroll/createpaidcourses', {
              email,
              course_ids: courseIds, 
              order_id: orderId,
              payment_id: paymentId
            })
            .then(res => {
              if (res.data.success) {
                console.log("Courses added successfully");
                clearCart(); // Clear cart after adding courses
              } else {
                console.error("Failed to add courses:", res.data.message);
              }
            })
            .catch(err => {
              console.error("Error adding courses:", err);
              clearCart(); // Clear cart in case of error
            });
          })
          .catch(error => {
            console.error("Error validating order:", error);
          });
      },
      prefill: {
        name: "Kavya",
        email: "kavya@example.com",
        contact: "9000090000"
      },
      notes: {
        address: "Razorpay Corporate Office"
      },
      theme: {
        color: "#3399cc"
      }
    };

    // Initialize Razorpay
    var rzp1 = new window.Razorpay(options);

    // Handle payment failure
    rzp1.on('payment.failed', function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    // Open the Razorpay payment modal
    rzp1.open();
  })
  .catch(error => {
    console.error("Error creating order:", error);
  });
};



  const onRemove = (course_id) => {
    const email = localStorage.getItem("email");
    axios.delete(`http://localhost:5000/enroll/removecourse?email=${email}&course_id=${course_id}`)
      .then(res => {
        if (res && res.data && res.data.success === true) {
          fetchEnrolledCourses();
          console.log("Course removed successfully");
        } else {
          console.error("Failed to remove course:", res.data.message);
        }
      })
      .catch(err => {
        console.error("Error removing course:", err);
      });
  };

  const clearCart = () => {
    const email = localStorage.getItem("email");
    axios.delete(`http://localhost:5000/enroll/clearcart?email=${email}`)
      .then(res => {
        if (res && res.data && res.data.success === true) {
          console.log("Cart cleared successfully");
          setEnrolledCourses([]);
          setTotalCost(0);
        } else {
          console.error("Failed to clear cart:", res.data.message);
        }
      })
      .catch(err => {
        console.error("Error clearing cart:", err);
      });
  };

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  const fetchEnrolledCourses = () => {
    const email = localStorage.getItem("email");
    axios.get(`http://localhost:5000/enroll/enrolledcourses?email=${email}`)
      .then(res => {
        if (res && res.data && res.data.success === true) {
          const courses = res.data.enrolledCourses;
          let total = 0;
          courses.forEach(course => {
            if (course.course_price !== "Free") {
              total += parseInt(course.course_price);
            }
          });
          setEnrolledCourses(courses);
          setTotalCost(total);
        } else {
          console.error("Failed to fetch enrolled courses:", res.data.message);
        }
      })
      .catch(err => {
        console.error("Error fetching enrolled courses:", err);
      });
  };

  return (
    <div className="cart-container">
      <h2 style={{textAlign: "center", fontSize: "30px", fontWeight: "500", color: "blue"}}>Cart</h2>
      {enrolledCourses.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {enrolledCourses.map(course => (
            <li key={course._id} className="cart-item">
              <p style={{fontSize: "1.3rem"}}>{course.course_name}</p>
              <p style={{fontSize: "1rem", marginTop: "10px"}}>{course.course_price}</p>
              <button className="remove-button" onClick={() => onRemove(course.course_id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p style={{fontSize: "1.3rem", fontWeight: "bold"}}>Total: {totalCost}</p>
      <button onClick={clearCart} className="clear-button">Clear Cart</button>
      <Link to="#">
        <button disabled={enrolledCourses.length === 0} className="checkout-button" onClick={(e) => paymentHandler(e)}>Checkout</button>
      </Link>
      <Link to='/courses'>
        <button className="add-more-button">Add More</button>
      </Link>
    </div>
  );
};

export default Cart;
