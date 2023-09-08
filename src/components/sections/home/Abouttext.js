import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";

function Abouttext(props) {
  const [focus, setFocus] = React.useState(false);
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 d-none d-lg-block">
            <div
              className="sigma_counter bg-cover primary-overlay bg-norepeat bg-center"
              style={{ backgroundImage: "url(assets/img/counter.jpg)" }}
            >
              <p>In</p>
              <h4>
                <CountUp
                  start={focus ? 0 : null}
                  end={197}
                  duration={5}
                  redraw={true}
                >
                  {({ countUpRef }) => (
                    <VisibilitySensor
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setFocus(true);
                        }
                      }}
                    >
                      <b ref={countUpRef} className="counter" />
                    </VisibilitySensor>
                  )}
                </CountUp>
                <span>+</span>
              </h4>
              <p>Countries</p>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="me-lg-30">
              <div className="section-title mb-0 text-start">
                <p className="subtitle">RCCG was founded in 1952</p>
                <h4 className="title">We Are A Church That Believes In God.</h4>
              </div>
              <p className="blockquote bg-transparent">
                {" "}
                We believe that the entire Scripture, both Old and New Testament
                are written by the inspiration of the Holy Spirit – II Tim.
                3:16-17{" "}
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="sigma_icon-block icon-block-3">
                    <div className="icon-wrapper">
                      <i className="flaticon-church-2" />
                    </div>
                    <div className="sigma_icon-block-content">
                      <h5> About God </h5>
                      <p>
                        As revealed unto us by the Bible, we believe that there
                        is only one God.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="sigma_icon-block icon-block-3">
                    <div className="icon-wrapper">
                      <i className="flaticon-charity" />
                    </div>
                    <div className="sigma_icon-block-content">
                      <h5> About Jesus Christ </h5>
                      <p>
                        We believe that He is the Son of God; Who took away our
                        sins, and the Savior of the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/about" className="sigma_btn-custom light">
                Learn More <i className="far fa-arrow-right" />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Abouttext;
