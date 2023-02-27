import React from 'react'
import logo from '../icons/logo.png'
import '../footer.css'
import lnkd from '../icons/linkedin.png'
import fcbk from '../icons/facebook.png'
import twttr from '../icons/twitter.png'

function Footer() {
  return (
    <div className='footer-wrap'>
        <div className='row'>
            <div className='col'>
                <div className='row imgr'>
                    <img src={logo} className='footerlogo'></img>
                </div>
                <div className='row'>
                    <p>
                    orem Ipsum is simply dummy<br/>
                    text of the printing and<br/>
                    typesetting industry. Lore
                    </p>
                </div>
            </div>
            <div className='col'>
                <div className='row'><span><b>About us</b></span></div>
                <div className='row'><span>Company</span></div>
                <div className='row'><span>Our Team</span></div>
                <div className='row'><span>Our Partener</span></div>
                <div className='row'><span>Our Customers</span></div>
                <div className='row'><span>Careers</span></div>
                <div className='row'><span>Contact us</span></div>
            </div>
            <div className='col'>
                <div className='row'><span><b>Quick Links</b></span></div>
                <div className='row'><span>Web Store</span></div>
                <div className='row'><span>Privacy Policy</span></div>
                <div className='row'><span>Trademarks & Copyrights</span></div>
                <div className='row'><span>Complaints & Appeal</span></div>
                <div className='row'><span>Careers</span></div>
                <div className='row'><span>Sitemap</span></div>
            </div>
            <div className='col'>
                <div className='row'><span><b>Subscribe to our newsletter</b></span></div>
                <div className='row'>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email"/>
                </div>
                <div className='row'>
                    <button className='btn btn-warning sbtn'>Subscribe</button>
                </div>
                <div className='row'>
                    <span><b>Follow us on</b></span>
                </div>
                <div className='row'>
                    <img src={lnkd} className='footscl'/>
                    <img src={fcbk} className='footscl'/>
                    <img src={twttr} className='footscl'/>
                </div>
            </div>
        </div>
        <div className='row'>
            <hr></hr>
        </div>
        <div className='row'>
            <span>©2022 All Rights reserved by Global Success Systems.</span>
        </div>
    </div>
  )
}

export default Footer