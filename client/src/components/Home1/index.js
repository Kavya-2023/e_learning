import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar11 from '../Navbar11';
import Footer from '../Footer';
import { motion } from 'framer-motion';
import desktopImg from '../../assets/desktop-landing-image.jpg';
import serviceImg1 from '../../assets/service-img-1.avif';
import serviceImg2 from '../../assets/service-img-2.avif';
import serviceImg3 from '../../assets/service-img-3.avif';
import wcu1 from '../../assets/wcu-1.avif';
import wcu2 from '../../assets/wcu-2.avif';
import './index.css';

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [startTyping, setStartTyping] = useState(false);
   useEffect(() => {
    // Start typing animation after initial render
    setStartTyping(true);
  }, []);

useEffect(() => {
    const text = 'Nanoquest';
    let index = 0;
    let intervalId;

    if (startTyping) {
      const typeText = () => {
        intervalId = setInterval(() => {
          if (index <= text.length) {
            setTypedText(text.slice(0, index));
            index++;
          } else {
            
            setTimeout(() => {
              index = 0;
              setTypedText('');
            }, 1000); 
          }
        }, 300); 
      };

      typeText();
    }

    return () => clearInterval(intervalId);
  }, [startTyping]);

  
  return (
    <>
      <Navbar11 />
      <div className="home-container">
        <div className="home-content">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "string", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1
            }}
            className="home-heading"
          >
            Welcome To {typedText}
            <span className="typing-cursor"></span>
          </motion.h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "string", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1
            }}
            className="home-description">
            Explore our wide range of skill courses to enhance your knowledge and expertise. Learn at your own pace with our elearning platform.
          </motion.p>
          <Link to='/signup'>
            <motion.button
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                x: { type: "string", stiffness: 60 },
                opacity: { duration: 0.6 },
                ease: "easeIn",
                duration: 1
              }}
              className="glow-on-hover" type="button">UPGRADE YOUR SKILLS</motion.button>
          </Link>
        </div>
        <div className='desktop-img-container'>
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: "string", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1
            }}
            src={desktopImg}
            alt="dresses to be noticed"
            className="home-desktop-img"
          />
        </div>
      </div>
      <div className='services-container'>
        <div className='service-cards-container'>
          <div className='service-card'>
            <div className='service-card-content'>
              <motion.h4
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "string", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1
                }}
              >Skill Courses</motion.h4>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  x: { type: "string", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1
                }}
              >Choose from a wide range of skill courses designed to help you develop and master new skills.</motion.p>
            </div>
            <div className='service-card-image'>
              <motion.img
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  scale: { type: "spring", stiffness: 260, damping: 20 },
                  opacity: { duration: 1 },
                  ease: "easeInOut",
                  duration: 1
                }}
                src={serviceImg1} alt="service-img" className='service-img'
              />
            </div>
          </div>
          <div className='service-card'>
            <div className='service-card-content'>
              <motion.h4
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "string", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1
                }}
              >Real-time Feedback</motion.h4>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  x: { type: "string", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1
                }}
              >Get instant feedback and personalized recommendations to improve your learning.</motion.p>
            </div>
            <div className='service-card-image'>
              <motion.img
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  scale: { type: "spring", stiffness: 260, damping: 20 },
                  opacity: { duration: 1 },
                  ease: "easeInOut",
                  duration: 1
                }}
                src={serviceImg2} alt="service-img" className='service-img'
              />
            </div>
          </div>
          <div className='service-card'>
            <div className='service-card-image'>
              <motion.img
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  scale: { type: "spring", stiffness: 260, damping: 20 },
                  opacity: { duration: 1 },
                  ease: "easeInOut",
                  duration: 1
                }}
                src={serviceImg3} alt="service-img" className='service-img'
              />
            </div>
            <div className='service-card-content'>
              <motion.h4
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "string", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1
                }}
              >Interactive Quizzes</motion.h4>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  x: { type: "string", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1
                }}
              >Test your knowledge and track your progress with our interactive quizzes.</motion.p>
            </div>
          </div>
          <div className='service-card'>
            <div className='service-card-image'>
              <motion.img
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.4,
                  scale: { type: "spring", stiffness: 260, damping: 20 },
                  opacity: { duration: 1 },
                  ease: "easeInOut",
                  duration: 1
                }}
                src={serviceImg1} alt="service-img" className='service-img'
              />
            </div>
            <div className='service-card-content'>
              <motion.h4
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  x: { type: "string", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1
                }}
              >Community Support</motion.h4>
              <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  x: { type: "string", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1
                }}
              >Connect with a community of learners and experts to share ideas and get support.</motion.p>
            </div>
          </div>
        </div>
      </div>
      <div className='testimonials-container'>
        <motion.h4
        initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            type: 'spring',
            stiffness: 100,
            damping: 10
          }}
         className='testimonials-heading'>Testimonials</motion.h4>
        <div>
          <motion.figure
          initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.5,
              type: 'spring',
              stiffness: 100,
              damping: 10
            }}
             class="snip1533">
            <figcaption>
              <blockquote>
                <p>If you do the job badly enough, sometimes you don't get asked to do it again.</p>
              </blockquote>
            </figcaption>
          </motion.figure>
          <motion.figure
          initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.5,
              type: 'spring',
              stiffness: 100,
              damping: 10
            }}
           class="snip1533">
            <figcaption>
              <blockquote>
                <p>I'm killing time while I wait for life to shower me with meaning and happiness.</p>
              </blockquote>
            </figcaption>
          </motion.figure>
          <motion.figure 
          initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.9,
              duration: 0.5,
              type: 'spring',
              stiffness: 100,
              damping: 10
            }}
          class="snip1533">
            <figcaption>
              <blockquote>
                <p>The only skills I have the patience to learn are those that have no real application in life. </p>
              </blockquote>
            </figcaption>
          </motion.figure>
        </div>
      </div>
      <div className='why-choose-container'>
        <div className='why-choose-card'>
          <motion.img
            src={wcu1} alt="wcu"
            whileHover={{ scale: 1.05 }}
          />
          <div className='why-choose-card-content'>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Why Choose NanoQuest for Skillbased elearning
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Discover the power of skillbased interactive elearning with NanoQuest. Enhance your knowledge and expertise in a fun and engaging way. Join our platform today!
            </motion.p>
          </div>
        </div>
        <div className='why-choose-card'>
          <motion.img
            src={wcu2} alt="wcu"
            whileHover={{ scale: 1.05 }}
          />
          <div className='why-choose-card-content'>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              How NanoQuest Revolutionizes elearning
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Experience a new era of elearning with NanoQuest. Our skillbased interactive platform offers a unique and effective way to learn. Discover the features that make NanoQuest the leading choice for online education.
            </motion.p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
