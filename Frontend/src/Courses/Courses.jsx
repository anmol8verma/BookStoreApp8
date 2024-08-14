import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'
import list from "../../public/list.json"


function Courses() {
    console.log(list); // display all the data in clg and we ned to show the data on the page 
  return (
    <>
    <Navbar/>
    <div className='min-h-screen'>
        {/* component will get the height of the screen */}
        {/* all the data of the list to be showed here  */}
    <Course />
    </div>

    <Footer/>
    </>
  )
}

export default Courses