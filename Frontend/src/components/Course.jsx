import React from 'react'   
import list from "../../public/list.json";
import { Link } from "react-router-dom";
import Cards from './Cards';

function Course() {
    console.log(list);                                                                                                                                          
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4' >
       <div  className="mt-28 items-center justify-center text-center ">
       <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className='mt-12'>
          The bookstore application is designed to provide a seamless and intuitive platform for users to browse, search, and purchase books online. Leveraging modern web technologies, the application offers a user-friendly interface that allows customers to explore a wide range of book categories, view detailed descriptions, and make informed purchasing decisions. With integrated features like a shopping cart, user reviews, and personalized recommendations, the bookstore application aims to enhance the shopping experience by making it convenient and enjoyable.
          </p>
          <Link to='/'>
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
            </Link>
       </div>
       <div className='mt-12 grid grid-cols-1 md:grid-cols-4 hover:scale-105 duration-300"'>
        {
          list.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
       </div>
    </div>
    </>
  )
}

export default Course
