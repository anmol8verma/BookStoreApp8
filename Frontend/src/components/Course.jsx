import React from "react";
import Cards from "./Cards";
import list from '../../public/list.json'
import { Link } from "react-router-dom";


// routing done for pages ,
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* diplays all the data  */}
        <div className="m-28 justify-center item-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We are delighted to have youe
            <t /> <span className="text-pink-500">here !</span>{" "}
          </h1>
          <br />
          {/* md means medium devices */}
          <p className="mt-12 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            illo? Itaque neque porro cupiditate, obcaecati id reiciendis vel
            libero praesentium quas eligendi deleniti repudiandae beatae alias
            omnis accusamus, repellat laudantium?
          </p>
        {/* button has top margin 6 with pink shade bg as 500 and rounded md/lg(medium/large) and upon hover it changes  */}
         <Link to="/">
         {/* link from the react router dom for internal page routing */}
         <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-700 duration-400 mt-6">Back</button>
         </Link>
        </div>
          <div className="mt-12 mr-20 pr-20 grid grid-cols-1 md:grid-cols-4">
            {/* css classes to be added in this div for the cards to be in rowwise grid of 4 cards format */}
            {/*  */}
            {
              // data will be mapped here which is coming from the cards and take the array data from the list
              // since the "freebook" was passed from the cards ,hence the same name prop will be passed here in the list.map
              list.map((freebook)=>(
                <Cards key ={freebook.id} freebook={freebook}/>
              ))
            }
          </div>
      </div>
    </>
  );
}

export default Course;
