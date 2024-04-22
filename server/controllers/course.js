import Course from '../models/course.js';
import PaidCourses from '../models/paidcourses.js';
// Controller function to get all courses
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a course by ID
export const getCourseById = async (req, res) => {
  const { id } = req.params;

  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to add a new course
export const addCourse = async (req, res) => {
  const course = req.body;

  try {
    const newCourse = await Course.create(course);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addCourses = async (req, res) => {
  const courses = req.body;

  try {
    const newCourses = await Course.insertMany(courses);
    res.status(201).json(newCourses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteAllCourses = async (req, res) => {
  try {
    await Course.deleteMany({});
    res.status(200).json({ message: 'All courses deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getPaidCourses = async (req, res) => {
  try {
    const { email } = req.query;
    
    // Find the PaidCourses document for the given email
    const paidCourses = await PaidCourses.findOne({ email });

    if (!paidCourses) {
      return res.status(404).json({ message: 'No paid courses found for the provided email' });
    }
  
    const courseIds = paidCourses.course_ids;
    const courses = await Course.find({ _id: { $in: courseIds } });

    const courseNames = courses.map(course => course.courses.course);

    res.json({ courseNames });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
