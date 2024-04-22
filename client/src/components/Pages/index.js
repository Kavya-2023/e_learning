import React from 'react';
import Navbar11 from '../Navbar11';
import './index.css';  // Import the provided CSS file

const CoursesComponent = () => {
  return (
    <> 
    <Navbar11/>
    <section className="bg-gray-900 text-white py-16 section-1 ">
      <div className="container mx-auto text-center">
       
        <h1 className='course-heading' >Courses</h1>

       

        {/* Container 1 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
           <div className="cont-1"> 
           <img className='img-1' alt="courses" src="https://img.freepik.com/premium-vector/2d-vector-illustration-graduation-success-college-study-training-courses-school-educational_918459-10565.jpg"/>
            <h2 className="text-xl font-bold text-gray-900 mb-2">UpSkills</h2>
           </div>    
                 
           <div className="cont-1"> 
                <img className='img-1' alt="courses" src="  https://online.stanford.edu/sites/default/files/styles/card_header/public/2020-04/how-learn-math-students_gse-yeduc115-s.jpg "/> 
                <h2 className="text-xl font-bold text-gray-900 mb-2">Education</h2>
            </div>    
           <div className="cont-1"> 
           <img className='img-1' alt="courses" src="https://online.stanford.edu/sites/default/files/styles/card_header/public/2020-04/quantum-mechanics-for-scientists-engineers_SOE-YEEQMSE01.jpg"/> 
            <h2 className="text-xl font-bold text-gray-900 mb-2">Engineering</h2>

                
           </div>  
           <div className="cont-1"> 
           <img className='img-1' alt="courses" src="https://online.stanford.edu/sites/default/files/styles/card_header/public/2020-04/browse-online.jpg"/> 
                <h2 className="text-xl font-bold text-gray-900 mb-2">Technology</h2>
            </div>   
            <div className="cont-1"> 
           <img className='img-1' alt="courses" src="https://online.stanford.edu/sites/default/files/styles/card_header/public/2020-04/browse-online.jpg"/> 
                <h2 className="text-xl font-bold text-gray-900 mb-2">Technology</h2>
            </div>      
            
         </div>

       

        <div className="mt-12">
          <a
            href="#"
            className="inline-block rounded bg-pink-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default CoursesComponent;
