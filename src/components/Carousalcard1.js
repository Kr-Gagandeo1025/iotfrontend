import React from 'react'
import caroimg from '../icons/caroimg.png'
import '../custom5.css'

function Carousalcard1() {
  return (
    <div>
        <div className="card c3">
            <div className="img-wrapper">
            <img src={caroimg} className="card-img-top i2" alt="..."/>
            </div>
            <div className="card-body">
                <p className="card-text ct3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet non sapien auctor.</p>
                <p className='fade-text'>By Himanshu , 03/02/2022</p>
                <a href="#" className="btn btn-primary cbtn">Read More</a>
            </div>
        </div>
    </div>
  )
}

export default Carousalcard1