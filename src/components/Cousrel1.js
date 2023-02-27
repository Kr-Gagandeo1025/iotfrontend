import React from 'react'
import Carousalcard1 from './Carousalcard1'
import '../custom6.css'
const Cousrel1 = () => {
  let box = document.querySelector('.carousal-body');
  let carousal = document.querySelector('.c3');
  const prevbtn = () =>{
    let width = carousal.clientWidth;
    box.scrollLeft = box.scrollLeft - (width);
    console.log(width)
  }
  const nextbtn = () =>{
    let width = carousal.clientWidth;
    box.scrollLeft = box.scrollLeft + (width);
    console.log(width)
  }
  return (
    <div>
        <h1>Latest News</h1>
        <div className='carousal-wrapper'>
          <div className='carousal-body'>
              <Carousalcard1/>
              <Carousalcard1/>
              <Carousalcard1/>
              <Carousalcard1/>
              <Carousalcard1/>
              <Carousalcard1/>
              <Carousalcard1/>
          </div>
          <button className='carousal-btn-lt' onClick={prevbtn}>&lt;</button>
          <button className='carousal-btn-rt' onClick={nextbtn}>&gt;</button>
          <div>
            <button className='btn btn-outline-primary'>Read More</button>
          </div>
        </div>
    </div>
  )
}

export default Cousrel1