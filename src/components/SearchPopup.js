import React from 'react'
import close from '../icons/close.png'
import '../popup.css'

function SearchPopup(props) {
  return (props.trigger)?(
    <div className='popup'>
        <div className='popup-inner'>
            <button className='popup-btn' onClick={() => props.setTrigger(false)}>
                <img src={close}></img>
            </button>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        </div>
    </div>
  ) : "";
}

export default SearchPopup