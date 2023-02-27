import React from 'react'
import mail from '../icons/mail.png'
import phone from '../icons/phone.png'
import facebook from '../icons/facebook.png'
import insta from '../icons/insta.png'
import yt from '../icons/yt.png'
import linkedin from '../icons/linkedin.png'

function socials() {
  return (
    <ul className="nav justify-content-center bg-body-tertiary">
        <li className="nav-item">
            <a className="nav-link disabled" href="#">
                <img src={mail} height='20' width='20'></img>
                demo@gssgroup.com
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" href="#">
                <img src={phone} height='20' width='20'></img>
                9876543210
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" href="#">
                Follow us on:
                <img className='m-2' src={facebook} height='20' width='20'></img>
                <img className='m-2' src={insta} height='20' width='20'></img>
                <img className='m-2' src={yt} height='20' width='20'></img>
                <img className='m-2' src={linkedin} height='20' width='20'></img>
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link disabled" href="#">
                Contact Us
            </a>
        </li>
    </ul>
  )
}

export default socials