import React from 'react'
import custom from '../custom.css'
import man from '../icons/man.png'
import bg2 from '../icons/backg2.png'

function MainScreen() {
  return (
    <div>
    <div className='container-mainhead'>
        <div className='container-masterhead'>
            <div className='row'>
                <div className='col-md-6'>
                    <p className='quote'>
                        <span className='text'>Improve </span><span className='text'>your </span><span className='text1'>business </span><span className='text1'>performance </span>
                        <sapn className='text'>by </sapn><span className='text'>empowering </span><span className='text'>your </span><span className='text'>people.</span>
                        <p className='sub-quote'>
                        get curated cources and dedicated consultation for your employees at one place.
                        </p>
                    </p>
                </div>
                <div className='col-md-6' id='manimg'>
                    <img className='man-image' src={man}></img>
                </div>
                <form className="row r2">
                <div className="col">
                    <button type="button" className="btn btn-warning btn-lg btn2">View Courses</button>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-primary btn-lg btn2">How it works?</button>
                </div>
                <div className="belowbtnimg row">
                    <div className='bel1 row'>
                        <label className="label1">Are you ready for VUCA Enviornment?</label>
                        <button className="btn1">View Article</button>
                    </div>
                    <div className='bel1 row'>
                        <label className="label1">Why IT Capability Assessments?</label>
                        <button className="btn1">View Article</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default MainScreen