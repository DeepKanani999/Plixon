import PageBanner from "@/components/PageBanner";
import TestimoinalSlider from "@/components/Slider/TestimonialSlider";
import Layout from "@/layouts/Layout";
import Link from "next/link";

const Pricing = () => {
  return (
    <Layout>
      <PageBanner title={"Pricing Table"} />

      {/*====== Start Pricing Section ======*/}
      <section className="pricing-area pt-110 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title section-title-two text-center mb-60">
                <h2>
                  <span className="line">Affordable</span> Package
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing-item pricing-item-one text-center mb-40 wow fadeInUp">
                <div className="pricing-inner-time">
                  <div className="pricing-head">
                    <span className="title">General</span>
                    <h2 className="price">25.00</h2>
                  </div>
                  <div className="pricing-body">
                    <ul className="list">
                      <li>Construction Drawing</li>
                      <li>Floor &amp; celling plan</li>
                      <li>Selection of Material</li>
                      <li>Structure of a project</li>
                      <li>Always plan support</li>
                      <li>Visualization premise</li>
                    </ul>
                    <Link className="main-btn icon-btn" href="/pricing">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing-item pricing-item-one text-center mb-40 wow fadeInDown">
                <div className="pricing-inner-time">
                  <div className="pricing-head">
                    <span className="title">General</span>
                    <h2 className="price">35.00</h2>
                  </div>
                  <div className="pricing-body">
                    <ul className="list">
                      <li>Construction Drawing</li>
                      <li>Floor &amp; celling plan</li>
                      <li>Selection of Material</li>
                      <li>Structure of a project</li>
                      <li>Always plan support</li>
                      <li>Visualization premise</li>
                    </ul>
                    <Link className="main-btn icon-btn" href="/pricing">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="pricing-item pricing-item-one text-center mb-40 wow fadeInUp">
                <div className="pricing-inner-time">
                  <div className="pricing-head">
                    <span className="title">General</span>
                    <h2 className="price">45.00</h2>
                  </div>
                  <div className="pricing-body">
                    <ul className="list">
                      <li>Construction Drawing</li>
                      <li>Floor &amp; celling plan</li>
                      <li>Selection of Material</li>
                      <li>Structure of a project</li>
                      <li>Always plan support</li>
                      <li>Visualization premise</li>
                    </ul>
                    <Link className="main-btn icon-btn" href="/pricing">
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Pricing Section ======*/}
      {/*====== Start Testimonial Section ======*/}
      <section
        className="testimonial-area bg_cover pt-110 pb-140"
        style={{
          backgroundImage: "url(assets/images/bg/testimonial-bg-1.jpg)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title section-title-two section-title-white text-center mb-40 wow fadeInUp">
                <h2>
                  <span className="line">Customer</span> Feedack
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="testimonial-wrapper-one text-center wow fadeInUp">
                <div className="testimonial-review-area">
                  <TestimoinalSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Blog Section ======*/}
      <section className="blog-area pt-115 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-60">
                <span className="sub-title">Recent Articles</span>
                <h2>Every Single Journal</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-item blog-post-item-one mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <Link href="/blog-details">
                    <img src="assets/images/blog/blog-1.jpg" alt="Blog Image" />
                  </Link>
                  <div className="post-date">
                    <a href="#">
                      20 <span>Oct</span>
                    </a>
                  </div>
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    <i className="ti-bookmark-alt" />
                    Tours &amp; Travel
                  </a>
                  <h3 className="title">
                    <Link href="/blog-details">
                      Duis nonummy socios mattis tempus penatibus
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-comments-smiley" />
                          <a href="#">0 Comment</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-id-badge" />
                          <a href="#">By admin</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-item blog-post-item-one mb-40 wow fadeInDown">
                <div className="post-thumbnail">
                  <Link href="/blog-details">
                    <img src="assets/images/blog/blog-2.jpg" alt="Blog Image" />
                  </Link>
                  <div className="post-date">
                    <a href="#">
                      20 <span>Oct</span>
                    </a>
                  </div>
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    <i className="ti-bookmark-alt" />
                    Tours &amp; Travel
                  </a>
                  <h3 className="title">
                    <Link href="/blog-details">
                      Litora phasellus in phasellus curabitur porta eun
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-comments-smiley" />
                          <a href="#">0 Comment</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-id-badge" />
                          <a href="#">By admin</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-item blog-post-item-one mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <Link href="/blog-details">
                    <img src="assets/images/blog/blog-3.jpg" alt="Blog Image" />
                  </Link>
                  <div className="post-date">
                    <a href="#">
                      20 <span>Oct</span>
                    </a>
                  </div>
                </div>
                <div className="entry-content">
                  <a href="#" className="cat-btn">
                    <i className="ti-bookmark-alt" /> Tours &amp; Travel
                  </a>
                  <h3 className="title">
                    <Link href="/blog-details">
                      Mattis parturent tortor lectus lestie sapien Dapus
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="ti-comments-smiley" />
                          <a href="#">0 Comment</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="ti-id-badge" />
                          <a href="#">By admin</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Blog Section ======*/}
    </Layout>
  );
};
export default Pricing;
