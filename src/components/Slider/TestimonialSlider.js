"use client";
import { Component, Fragment } from "react";
import Slider from "react-slick";

export default class TestimoinalSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <Fragment>
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          dots={false}
          arrows={false}
          autoplaySpeed={1500}
          focusOnSelect={true}
          autoplay={true}
          slidesToShow={3}
          slidesToScroll={1}
          className="testimonial-thumb-slider-one"
        >
          <div className="single-thumb">
            <img
              src="/assets/images/about-us-page/feedback-user-1.jpg"
              alt="testimonial thumb"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="single-thumb">
            <img
              src="/assets/images/about-us-page/feedback-user-2.jpg"
              alt="testimonial thumb"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="single-thumb">
            <img
              src="/assets/images/about-us-page/feedback-user-3.jpg"
              alt="testimonial thumb"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <div className="single-thumb">
            <img
              src="/assets/images/about-us-page/feedback-user-4.jpg"
              alt="testimonial thumb"
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          dots={false}
          arrows={false}
          infinite={true}
          autoplaySpeed={1500}
          autoplay={true}
          fade={true}
          slidesToShow={1}
          slidesToScroll={1}
          className="testimonial-content-slider-one"
        >
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p>
                Good TV with nice features but the sound quality could be
                better. The customer service team was very helpful when I had
                questions about setup.{" "}
              </p>
              <div className="author-info">
                <div className="author-title">
                  <h4>Priya Sharma</h4>
                  {/* <span className="position">Sr. Designer</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p>
                I'm extremely satisfied with my Plixon TV. The Android interface
                is smooth and the display is perfect for cricket matches. Would
                definitely recommend to friends!{" "}
              </p>
              <div className="author-info">
                <div className="author-title">
                  <h4>Rajesh Patel</h4>
                  {/* <span className="position">Sr. Designer</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p>
                The TV looks beautiful in our living room but I faced some
                connectivity issues with WiFi. After contacting support, they
                guided me through the solution. Happy with the after-sales
                service.{" "}
              </p>
              <div className="author-info">
                <div className="author-title">
                  <h4>Ananya Gupta</h4>
                  {/* <span className="position">Sr. Designer</span> */}
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item">
            <div className="testimonial-content">
              <p>
                Plixon Smart TV has transformed our family entertainment
                experience! The picture quality is exceptional and the smart
                features work flawlessly. Best purchase we've made this year!{" "}
              </p>
              <div className="author-info">
                <div className="author-title">
                  <h4>Vikram Singh</h4>
                  {/* <span className="position">Sr. Designer</span> */}
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </Fragment>
    );
  }
}
