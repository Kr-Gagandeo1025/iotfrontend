import React from 'react'
import Carousalcard2 from './Carousalcard2'
import '../custom7.css'

function Carousal2() {
    return (
    <div className='carousal2body'>
        <h2>What our customers say ?</h2>
        <p>We belive in 100% client satisfaction and here is what they say about us.</p>
        <div className='carousal2wrapper'>
        <Carousalcard2/>
        <Carousalcard2/>
        <Carousalcard2/>
        <Carousalcard2/>
        <Carousalcard2/>
        <Carousalcard2/>
        <Carousalcard2/>
        </div>
        <button className='btn btn-outline-primary'>View More</button>
    </div>
  )
}

export default Carousal2