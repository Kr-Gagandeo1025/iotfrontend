import React from 'react'
import cimg from '../icons/cimg1.png'
import '../custom7.css'


function Carousalcard2() {
  return (
    <div className='cardwrapper'>
        <div className='ccard2imgdiv'>
            <img src={cimg} className="carousalcard2img" />
        </div>
        <div>
            <h2>Ricky Master</h2>
            <samll>Student</samll>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae pulvinar ipsum at nunc. Neque, orci faucibus sit feugiat gravida urna. Tristique volutpat.</p>
        </div>
    </div>
  )
}

export default Carousalcard2