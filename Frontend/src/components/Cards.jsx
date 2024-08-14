import React from 'react'

function Cards({freebook}) {
    // this card will be reused everywhere so made a component seperate , card with badge will be taken from daisy UI
    console.log(freebook);
  return (
<>
{/* filter data is an array */}
<div className='mx-2 my-2'>
<div className="card w-58 bg-base-50 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white">
  <figure>
    {/* using dynamic properties to show image , name , category , price  for the list etc to the card  */}
    <img
      src={freebook.image}
      alt="free book" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {freebook.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{freebook.title}</p>
    <br/>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline">${freebook.price}</div>
      {/* upon hover text becomes pink with duration 200ms */}
      <div className="cursor-pointer px-2 py-2 rounded-full border-[2px] hover:bg-pink-500 hover:text-white px-2 py-2 duration-200">Buy Now</div>
    </div>
  </div>
</div>
</div>
</>
    )
}

export default Cards