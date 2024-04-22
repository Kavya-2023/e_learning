// School.js

//import { Link } from 'react-router-dom';
import './style.css';
import CourseCard from '../CourseCard';

export default function Finance() {
  const financeList=[
    {
    appId: 26,
    appName: 'Financial Literacy and Personal Finance',
    des: 'Learn the basics of budgeting, saving, investing, and managing personal finances effectively.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 27,
    appName: 'Introduction to Accounting',
    des: 'Understand the fundamental principles of accounting and financial statements.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 28,
    appName: 'Investment Fundamentals',
    des: 'Explore the world of stocks, bonds, and investment strategies.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 29,
    appName: 'Financial Modeling',
    des: 'Gain skills in building financial models to analyze businesses and investments.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 30,
    appName: 'Risk Management and Insurance',
    des: 'Explore the concepts of risk assessment and how insurance works.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 31,
    appName: 'Introduction to Banking',
    des: 'Get insights into the banking industry, its functions, and financial products.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 32,
    appName: 'Estate Planning and Wealth Management',
    des: 'Learn about managing wealth, estate planning, and inheritance.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 33,
    appName: 'Financial Technology (FinTech)',
    des: 'Understand how technology is reshaping the financial industry, including blockchain and cryptocurrency.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 34,
    appName: 'Financial Regulation and Compliance',
    des: 'Understand the legal and regulatory aspects of the finance industry.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 35,
    appName: 'Financial Reporting and Analysis',
    des: 'Dive into financial statement analysis and reporting for businesses.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 36,
    appName: 'Credit Management',
    des: 'Learn how to manage credit, understand credit reports, and improve credit scores.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 37,
    appName: 'Financial Planning for Millennials',
    des: 'Specifically tailored to the financial needs and goals of young adults.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 38,
    appName: 'Online Trading and Investment',
    des: 'Explore online brokerage platforms, stock trading, and investment strategies for beginners.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 39,
    appName: 'Budgeting and Money Management Apps',
    des: 'Discover how to use personal finance apps for budgeting, expense tracking, and financial planning.',
    dur: '1 hour',
    category: 'FINANCE',
  },
  {
    appId: 40,
    appName: 'Digital Payments and Cryptocurrencies',
    des: 'Learn about digital wallets, peer-to-peer payments, and cryptocurrencies like Bitcoin.',
    dur: '1 hour',
    category: 'FINANCE',
  },
]
  
  return (
    <div>
          <div class="ag-format-container">
            <h3 style={{fontSize:"30px",textAlign:"center",fontWeight:"500"}}>School Courses</h3>
         <div class="ag-courses_box">
          {
            financeList.map((item)=>(

                <CourseCard courseName={item.appName} desc={item.des} key={item.appId}/>
            ))
          }
     </div>
     </div>
    </div>
  );
}

  