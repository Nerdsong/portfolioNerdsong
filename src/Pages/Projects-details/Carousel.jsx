import React from 'react'
import { useState } from 'react';
import "./Carousel.css"

import { BsArrowLeftCircleFill,BsArrowRightCircleFill } from 'react-icons/bs';

function Carousel({images}) {
    const [currentIndex,setCurrentIndex]= useState(0);

    const nextSlide = ()=>{
      setCurrentIndex (currentIndex === images.length - 1 ? 0 : currentIndex +1)
    }

    const prevSlide = () =>{
      setCurrentIndex (currentIndex === 0 ? images.length -1 : currentIndex-1)
    }

  return (
    <div className='carousel'>
      
      {images.map (
        (image, index) => {
          return <img src  = {image.src} alt = {image.alt} key = {index} className= {currentIndex===index ? "slide" : "slide slide-hidden"} />
        }
      )}
      <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
      <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
      <span className="indicators"> 
        {images.map(
          (_,index)=>{
            return <button key={index}onClick={()=>{setCurrentIndex(index)}} className= {currentIndex===index ? "indicator" : "indicator indicator-inactive"} ></button>
          }
        )}
      </span>
    </div>
  )
}

export default Carousel