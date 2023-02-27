import React from 'react'
import '../company.css'
import almarai from '../icons/alamrai.png'
import adcb from '../icons/adcb.png'
import abbank from '../icons/abbank.png'
import difc from '../icons/difc.png'

function Companies() {
  return (
    <div className='company-wrapper'>
        <div>
        <h2>Our Major Clients</h2>
        <p>our estimated clients around the world</p>
        </div>
        <div className='company row'>
            <div className='company-div col'>
                <img className='company-img' src={almarai}></img>
            </div>
            <div className='company-div col'>
                <img className='company-img' src={difc}></img>
            </div>
            <div className='company-div col'>
                <img className='company-img' src={adcb}></img>
            </div>
            <div className='company-div col'>
                <img className='company-img' src={abbank}></img>
            </div>
        </div>
    </div>
  )
}

export default Companies