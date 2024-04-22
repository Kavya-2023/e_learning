// enroll.js
import express from 'express';
import { enrollCourse, getEnrolledCourses, clearCart, removeCourse ,createPaidCourses} from '../controllers/enroll.js';

const router = express.Router();

router.post('/enroll', enrollCourse);
router.get('/enrolledcourses', getEnrolledCourses); 
router.delete('/clearcart', clearCart); 
router.delete('/removecourse', removeCourse);
router.post('/createpaidcourses',createPaidCourses);
export default router;
