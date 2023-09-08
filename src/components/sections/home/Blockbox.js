import React, { Component } from "react";
import { Link } from "react-router-dom";

class Blockbox extends Component {
  render() {
    return (
      <div className="section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <Link
                to="/sermons"
                className="sigma_service border style-1 bg-white"
              >
                <div className="sigma_service-thumb">
                  <i className="flaticon-church" />
                  <span />
                  <span />
                </div>
                <div className="sigma_service-body">
                  <h5>Our Sermons</h5>
                  <p>
                    Watch and listen to past sermons that would change your life
                    forever{" "}
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link
                to="/ministries"
                className="sigma_service border style-1 primary-bg"
              >
                <div className="sigma_service-thumb">
                  <i className="text-white flaticon-speech" />
                  <span />
                  <span />
                </div>
                <div className="sigma_service-body">
                  <h5 className="text-white">Ministries</h5>
                  <p className="text-white">
                    Our list of units and departments you can serve God through{" "}
                  </p>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6">
              <Link
                to="/events"
                className="sigma_service border style-1 secondary-bg"
              >
                <div className="sigma_service-thumb">
                  <i className="custom-primary flaticon-praying" />
                  <span />
                  <span />
                </div>
                <div className="sigma_service-body">
                  <h5 className="text-white">Events</h5>
                  <p className="text-white">
                    Check out programs and events to keep you in the loop{" "}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blockbox;
