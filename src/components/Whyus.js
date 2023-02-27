import React from 'react'
import ppl from '../icons/peoplegrp.png'
import custom4 from '../custom4.css'
import whyimg1 from '../icons/whyimg1.png'
import whyimg2 from '../icons/whyimg2.png'
import whyimg3 from '../icons/whyimg3.png'

function Whyus() {
  return (
    <div className='whyus'>
        <div className='row'>
            <div className='col-md-6'>
                <img src={ppl} alt='img' className='pplimg'></img>
            </div>
            <div className='col-md-6'>
                <div className='row'>
                    <div className="card2 mb-3">
                    <div className="row g-0">
                        <div className="crdimg2 col-md-4">
                        <img src={whyimg1} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">
                            <b>
                                <big>Real World Professionals</big>
                            </b>
                            </h5>
                            <p className="card-text">
                            Our Trainers, Consultants and Auditors are with an
                            average 15+ years of practical and global experience.
                            </p>
                            <p className="card-text">
                            <button
                                className="btn btn-outline"
                                style={{ maxWidth: 200 }}
                            >
                                View Our Team
                            </button>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="card2 mb-3">
                    <div className="row g-0">
                        <div className="crdimg2 col-md-4">
                        <img src={whyimg2} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">
                            <b>
                                <big>Accredited Cources</big>
                            </b>
                            </h5>
                            <p className="card-text">
                            Our courses and exams are accredited by global
                            Certification Bodies and experts.
                            </p>
                            <p className="card-text">
                            <button
                                className="btn btn-outline"
                                style={{ maxWidth: 200 }}
                            >
                                View Accreditations
                            </button>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="card2 mb-3">
                    <div className="row g-0">
                        <div className="crdimg2 col-md-4">
                        <img src={whyimg3} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">
                            <b>
                                <big>Industry Leading Products and Solutions</big>
                            </b>
                            </h5>
                            <p className="card-text">
                            We provide customized, practical, implementable
                            services to achieve your goals.
                            </p>
                            <p className="card-text">
                            <button
                                className="btn btn-outline"
                                style={{ maxWidth: 200 }}
                            >
                                View Approach
                            </button>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Whyus