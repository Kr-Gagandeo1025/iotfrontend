import React, { useState } from 'react'
import logo from '../icons/logo.png'
import cart from '../icons/cart.png'
import cpro from '../icons/circleProfile.png'
import SearchPopup from '../components/SearchPopup';
import search from '../icons/search-1.png'
import custom2 from '../custom2.css'
function Navbar() {
    const [popup, setpopup] = useState(false)
    const popper = () =>{
        setpopup(true)
    }
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
    <div className="container bg-light">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
            <img src={logo} width="180" height="65" className="d-inline-block align-text-top m-2"/>
        </a>
        <form className="d-flex" role="search">
            <button className="btn btn-outline-success" onClick={popper}>
                <img className='srchicn' src={search}></img>
            </button>
        </form>
        {/* <div className='container overflow-auto'> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <h6>Training</h6>
            </a>
            <ul className="dropdown-menu">
                <div className='container big-drop'>
                <table>
                    <tbody>
                    <tr>
                        <td><li><a className="dropdown-item " href="#"><b>Governance</b></a></li></td>
                        <td><li><a className="dropdown-item" href="#"><b>Continuity & Resilience</b></a></li></td>
                        <td><li><a className="dropdown-item" href="#"><b>Auditing & Assurance</b></a></li></td>
                    </tr>
                    <tr>
                        <td><li><a className="dropdown-item" href="#">COBIT</a></li></td>
                        <td><li><a className="dropdown-item" href="#">BCM ISO 22301</a></li></td>
                        <td><li><a className="dropdown-item" href="#">Cybersecurity Audit</a></li></td>
                    </tr>
                    <tr>
                        <td><li><a className="dropdown-item" href="#">ISO/IEC 38500</a></li></td>
                        <td><li><a className="dropdown-item" href="#">Disaster Recovery</a></li></td>
                        <td><li><a className="dropdown-item" href="#">CISA</a></li></td>
                    </tr>
                    <tr>
                        <td><li><a className="dropdown-item" href="#">CGEIT</a></li></td>
                        <td><li><a className="dropdown-item" href="#">Org. Resilience-ISO22316</a></li></td>
                        <td><li><a className="dropdown-item" href="#">Internal Audit</a></li></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td><li><a className="dropdown-item" href="#">Assessor</a></li></td>
                    </tr>
                    <tr>
                        <td><li><a className="dropdown-item" href="#"><b>Peformamce Management</b></a></li></td>
                        <td><li><a className="dropdown-item" href="#"><b>Risk Management</b></a></li></td>
                        <td><li><a className="dropdown-item" href="#"><b>Digital Transformation</b></a></li></td>
                    </tr>
                    <tr>
                        <td><li><a className="dropdown-item" href="#">Balanced Scorecard</a></li></td>
                        <td><li><a className="dropdown-item" href="#">CRISC</a></li></td>
                        <td><li><a className="dropdown-item" href="#">Dig. Transf. Officer</a></li></td>
                    </tr>
                    <tr>
                        <td><li><a className="dropdown-item" href="#">KPI</a></li></td>
                        <td><li><a className="dropdown-item" href="#">ISO 31000</a></li></td>
                        <td><li><a className="dropdown-item" href="#">Dig. Transf. Professional</a></li></td>
                    </tr>
                    <tr>
                        <td><li><a className="dropdown-item" href="#">Strategy Management</a></li></td>
                        <td><li><a className="dropdown-item" href="#">IT Risk Management</a></li></td>
                        <td><li><a className="dropdown-item" href="#">Dig. Transf. Specialist</a></li></td>
                    </tr>
                    <tr>
                        <td><li><a className="dropdown-item" href="#"><b>Cybersecurity & Privacy</b></a></li></td>
                        <td><li><a className="dropdown-item" href="#">ISO 27005</a></li></td>
                        <td><li><a className="dropdown-item" href="#">DG Tech. Professional</a></li></td>
                    </tr>
                    <tr>
                        <td><li><a className="dropdown-item" href="#">EXIN Info Security based</a></li></td>
                        <td><li><a className="dropdown-item" href="#">M_o_R</a></li></td>
                        <td><li><a className="dropdown-item" href="#">DG Data Sci. Professional</a></li></td>
                    </tr>
                    <tr>
                        <td><li><a className="dropdown-item" href="#">ISO/IEC 27001</a></li></td>
                        <td><li><a className="dropdown-item" href="#"><b>Compilance Management</b></a></li></td>
                        <td><li><a className="dropdown-item" href="#">Dig. Transf. Data Scientist</a></li></td>
                    </tr>
                    <tr>
                        <td><li><a className="dropdown-item" href="#">Cyber & IT Security</a></li></td>
                        <td><li><a className="dropdown-item" href="#">ISO 19600 CMS</a></li></td>
                        <td><li><a className="dropdown-item" href="#">Dig. Transf. Sec. Professional</a></li></td>
                    </tr>
                    <tr>
                        <td><li><a className="dropdown-item" href="#">Computer Forensics</a></li></td>
                        <td><li><a className="dropdown-item" href="#">ISO 37001 ABMS</a></li></td>
                        <td><li><a className="dropdown-item" href="#">DG Tech. Professional</a></li></td>
                    </tr>
                    <tr>
                        <td><li><a className="dropdown-item" href="#">Cybersecurity</a></li></td>
                        <td><li><a className="dropdown-item" href="#"><b>Quality & Lean Management</b></a></li></td>
                        <td><li><a className="dropdown-item" href="#"></a><b>Architecture Management</b></li></td>
                    </tr>
                    <tr>
                        <td><li><a className="dropdown-item" href="#">ISO/IEC 27001</a></li></td>
                        <td><li><a className="dropdown-item" href="#"><b>Project Management</b></a></li></td>
                        <td><li><a className="dropdown-item" href="#"></a><b>Others</b></li></td>
                    </tr>
                    <tr>
                        <td><li><a className="dropdown-item" href="#">GDPR Data Protection</a></li></td>
                        <td><li><a className="dropdown-item" href="#"><b>Service Management</b></a></li></td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </ul>
            </li>
            <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#"><h6>Consulting</h6></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#"><h6>Solutions</h6></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#"><h6>Webstore</h6></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#"><h6>Resources</h6></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#"><h6>About us</h6></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#"><img src={cart} height='40' width='40'></img></a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#"><img src={cpro} height='40' width='40'></img> Kr. Gagandeo</a>
            </li>
        </ul>
        {/* </div> */}
        </div>
    </div>
    </nav>
    <SearchPopup trigger={popup} setTrigger={setpopup}/>
    </div>
  )
}

export default Navbar