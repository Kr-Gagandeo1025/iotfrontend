import React from "react";
import custom3 from "../custom3.css";
import cimg1 from "../icons/cimg1.png";
import cimg2 from "../icons/cimg2.png";
import cimg3 from "../icons/cimg3.png";
import cimg4 from "../icons/cimg4.png";

function servicecs() {
  return (
    <div className="main">
      <div className="container text-center">
        <h2>
          <b>Our Services</b>
        </h2>
        <p>Making you industry ready is our responsibility</p>
        <div className="row ">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="crdimg col-md-4">
                  <img src={cimg1} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <big>
                        <b>Training</b>
                      </big>
                    </h5>
                    <p className="card-text">
                      We help you to gain the knowledge, skills and practical
                      application of the subjects. Check certification courses
                      and other programs....
                    </p>
                    <p className="card-text">
                      <button
                        className="btn btn-primary"
                        style={{ maxWidth: 200 }}
                      >
                        View Cources
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="crdimg col-md-4">
                  <img src={cimg2} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>
                        <big>Consulting</big>
                      </b>
                    </h5>
                    <p className="card-text">
                      We help you to gain the knowledge, skills and practical
                      application of the subjects. Check certification courses
                      and other programs....
                    </p>
                    <p className="card-text">
                      <button
                        className="btn btn-primary"
                        style={{ maxWidth: 200 }}
                      >
                        View Cources
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="crdimg col-md-4">
                  <img src={cimg3} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>
                        <big>Web Store</big>
                      </b>
                    </h5>
                    <p className="card-text">
                      We help you to gain the knowledge, skills and practical
                      application of the subjects. Check certification courses
                      and other programs....
                    </p>
                    <p className="card-text">
                      <button
                        className="btn btn-primary"
                        style={{ maxWidth: 200 }}
                      >
                        View Cources
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="crdimg col-md-4">
                  <img src={cimg4} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      <b>
                        <big>Solutions</big>
                      </b>
                    </h5>
                    <p className="card-text">
                      We help you to gain the knowledge, skills and practical
                      application of the subjects. Check certification courses
                      and other programs....
                    </p>
                    <p className="card-text">
                      <button
                        className="btn btn-primary"
                        style={{ maxWidth: 200 }}
                      >
                        View Cources
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutus">
        <h2 className="abouthead">About us</h2>
        <samll>A brief about our vision, mission & us.</samll>
        <p className="abouttext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
          sed eget ut turpis eget feugiat aenean viverra. Sodales in urna nec,
          amet molestie varius. Vel auctor vitae ultrices eget senectus. Nisi,
          mattis lectus mi tellus quis ornare. Arcu tristique nulla duis eu nunc
          molestie. Donec dictumst sapien enim nec nibh sed arcu. Quis pretium
          ultrices velit non euismod. Amet at consectetur at tortor pharetra,
          nisl donec quam cras. Aliquet dolor etiam commodo nisl.<br/><br/>Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Nunc vitae sed eget ut
          turpis eget feugiat aenean viverra. Sodales in urna nec, amet molestie
          varius. Vel auctor vitae ultrices eget senectus. Nisi, mattis lectus
          mi tellus quis ornare. Arcu tristique nulla duis eu nunc molestie.
          Donec dictumst sapien enim nec nibh sed arcu. Quis pretium ultrices
          velit non euismod. Amet at consectetur at tortor pharetra, nisl donec
          quam cras. Aliquet dolor etiam commodo nisl.
        </p>
      </div>
    </div>
  );
}

export default servicecs;
