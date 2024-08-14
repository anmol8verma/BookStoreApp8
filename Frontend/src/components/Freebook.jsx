import React from "react";
// importing the list
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";
function Freebook() {
  // if data.category === free then only filter and keep this elemement in the filterData const and then see this in the console log , all the filtered variable will be collected in the filterData variable after they are passed from free category , filterData is an array of filtered free books 
  const filterData = list.filter((x) => x.category === "free");
  // acc to the condition the filtered data will be filtered or sorted out
    {var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]};}
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* data displayed here will come from list.json */}
        {/* now we need to filter free books from the json data and display that using filter and map method in the js , list has array of data having category as free  */}
        <div>
        <h1 className="font semibold text-xl pd-2">Free offered courses</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
          quibusdam quis, alias perspiciatis harum voluptates inventore deleniti
          pariatur libero recusandae veniam provident corrupti! Laboriosam,
          laborum sit delectus a esse quaerat?
        </p>
        </div>
        {/* sow the card component from the react slick slider linbrary where this premade component is kept , and go to doc to install this command */}
        {/* npm install react-slick --save 
        and install css as well
        npm install slick-carousel --save
        */}
        {/*   // slider will have function and this filterData was also an array of filter free books and props will be used to pass the data from parent to child component and key is passed so to make the id unique and recieve the i item from this freebook component to cards component */}
      <div>
        <Slider {...settings}>
            {filterData.map((freebook)=>(
            <Cards freebook={freebook} key={freebook.id}/> )
            )}
        </Slider>
      </div>
        </div>
    </>
  );
}

export default Freebook;
