import React from 'react'
import './index.css';
import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog3.jpg'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants'
const Blog = () => {
  return (
    <>
    <h1 className='blog-heading'>Our Blogs</h1>
    <div className='blogs-container'>
      
      <motion.div
      variants={fadeIn("left",0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
       className='blog-card'>
        <img src={blog1} alt="blog-img"/>
        <p>Embark on Your Learning Adventure with NanoQuestTech: A Guide to Unlocking Your Potential</p>
        <Link to='/blog1'>
          <button class="button-74" role="button">Read</button>
        </Link>
      </motion.div>
      <motion.div
      variants={fadeIn("up",0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
       className='blog-card'>
        <img src={blog2} alt="blog-img"/>
        <p>Unlock Your Full Potential: Explore Transformative Courses with NanoQuestTech</p>
        <Link to='/blog2'>
          <button class="button-74" role="button">Read</button>
        </Link>
      </motion.div>
      <motion.div
      variants={fadeIn("right",0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
       className='blog-card'>
        <img src={blog3} alt="blog-img"/>
        <p>Embark on Your Educational Journey with NanoQuestTech: Explore, Learn, Thrive!</p>
        <Link to='/blog3'>
          <button class="button-74" role="button">Read</button>
        </Link>
      </motion.div>
    </div>
    </>
    
  )
}

export default Blog
