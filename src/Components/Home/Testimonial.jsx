import Slider from "react-slick";
import data from "../../Data/testimonial.json";
import { useEffect, useRef } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Testimonial = () => {

    const sliderRef = useRef(null);

    const next = () => {
      sliderRef.current.slickNext();
    };
  
    const previous = () => {
      sliderRef.current.slickPrev();
    };   

    useEffect(() => {
        loadBackgroudImages();
      }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
      };

    return (
        <section className="cs_testimonial_1_section cs_bg_filed" data-background="/assets/img/testimonial_bg.svg">
          <div className="cs_height_115 cs_height_lg_70"></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-7">
                <div className="cs_section_heading cs_style_1">
                  <h3 className="cs_section_subtitle cs_accent_color text-uppercase cs_medium cs_fs_20 cs_mb_10">
                    <img src="/assets/img/icons/fan.svg" alt="" className="cs_section_subheading_icon" />
                    Testimonials
                  </h3>
                  <h2 className="cs_section_title cs_white_color cs_fs_48 cs_semibold mb-0">Our Clients Feedback</h2>
                </div>
                <div className="cs_height_45 cs_height_lg_45"></div>
                <div className="cs_slider cs_style_1">
                <Slider ref={sliderRef} {...settings}>
                    {data.map((item, i) => (
                        <div key={i} className="cs_slide">
                            <div className="cs_testimonial cs_style_1">
                            <div className="cs_rating cs_accent_color">
                            <svg width="90" height="14" viewBox="0 0 90 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.07031 1.26562C6.35156 0.703125 7.14844 0.726562 7.40625 1.26562L8.95312 4.38281L12.375 4.875C12.9844 4.96875 13.2188 5.71875 12.7734 6.16406L10.3125 8.57812L10.8984 11.9766C10.9922 12.5859 10.3359 13.0547 9.79688 12.7734L6.75 11.1562L3.67969 12.7734C3.14062 13.0547 2.48438 12.5859 2.57812 11.9766L3.16406 8.57812L0.703125 6.16406C0.257812 5.71875 0.492188 4.96875 1.10156 4.875L4.54688 4.38281L6.07031 1.26562Z" fill="#FF5500"/>
                              <path d="M25.0703 1.26562C25.3516 0.703125 26.1484 0.726562 26.4062 1.26562L27.9531 4.38281L31.375 4.875C31.9844 4.96875 32.2188 5.71875 31.7734 6.16406L29.3125 8.57812L29.8984 11.9766C29.9922 12.5859 29.3359 13.0547 28.7969 12.7734L25.75 11.1562L22.6797 12.7734C22.1406 13.0547 21.4844 12.5859 21.5781 11.9766L22.1641 8.57812L19.7031 6.16406C19.2578 5.71875 19.4922 4.96875 20.1016 4.875L23.5469 4.38281L25.0703 1.26562Z" fill="#FF5500"/>
                              <path d="M44.0703 1.26562C44.3516 0.703125 45.1484 0.726562 45.4062 1.26562L46.9531 4.38281L50.375 4.875C50.9844 4.96875 51.2188 5.71875 50.7734 6.16406L48.3125 8.57812L48.8984 11.9766C48.9922 12.5859 48.3359 13.0547 47.7969 12.7734L44.75 11.1562L41.6797 12.7734C41.1406 13.0547 40.4844 12.5859 40.5781 11.9766L41.1641 8.57812L38.7031 6.16406C38.2578 5.71875 38.4922 4.96875 39.1016 4.875L42.5469 4.38281L44.0703 1.26562Z" fill="#FF5500"/>
                              <path d="M63.0703 1.26562C63.3516 0.703125 64.1484 0.726562 64.4062 1.26562L65.9531 4.38281L69.375 4.875C69.9844 4.96875 70.2188 5.71875 69.7734 6.16406L67.3125 8.57812L67.8984 11.9766C67.9922 12.5859 67.3359 13.0547 66.7969 12.7734L63.75 11.1562L60.6797 12.7734C60.1406 13.0547 59.4844 12.5859 59.5781 11.9766L60.1641 8.57812L57.7031 6.16406C57.2578 5.71875 57.4922 4.96875 58.1016 4.875L61.5469 4.38281L63.0703 1.26562Z" fill="#FF5500"/>
                              <path d="M82.0703 1.26562C82.3516 0.703125 83.1484 0.726562 83.4062 1.26562L84.9531 4.38281L88.375 4.875C88.9844 4.96875 89.2188 5.71875 88.7734 6.16406L86.3125 8.57812L86.8984 11.9766C86.9922 12.5859 86.3359 13.0547 85.7969 12.7734L82.75 11.1562L79.6797 12.7734C79.1406 13.0547 78.4844 12.5859 78.5781 11.9766L79.1641 8.57812L76.7031 6.16406C76.2578 5.71875 76.4922 4.96875 77.1016 4.875L80.5469 4.38281L82.0703 1.26562Z" fill="#FF5500"/>
                              </svg>
                            </div>
                            <blockquote className="cs_testimonial_blockquote cs_white_color cs_mb_25 cs_fs_16">{item.desc}</blockquote>
                            <div className="cs_testimonial_avatar_box">
                                <img src={item.img} alt="" className="cs_testimonial_avatar_img" />
                                <div className="cs_testimonial_avatar_right">
                                <h3 className="cs_fs_24 cs_accent_color cs_mb_1">{item.title}</h3>
                                <p className="mb-0">{item.subTitle}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                </div>
                <div className="cs_slider_arrows cs_style_2 testtimonial_arow_area cs_hide_md">
                  <div className="cs_left_arrow cs_slider_arrow cs_center" onClick={previous}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_5_106)">
                      <path d="M6.4 1.59961L7.52 2.71961L3.04 7.19961H16V8.79961H3.04L7.52 13.2796L6.4 14.3996L0 7.99961L6.4 1.59961Z" fill="white"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_5_106">
                      <rect width="16" height="16" fill="white" transform="matrix(-1 0 0 1 16 0)"/>
                      </clipPath>
                      </defs>
                    </svg> 
                  </div>
                  <div className="cs_right_arrow cs_slider_arrow cs_center" onClick={next}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_5_66)">
                      <path d="M9.6 1.59961L8.48 2.71961L12.96 7.19961H0V8.79961H12.96L8.48 13.2796L9.6 14.3996L16 7.99961L9.6 1.59961Z" fill="white"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_5_66">
                      <rect width="16" height="16" fill="white"/>
                      </clipPath>
                      </defs>
                    </svg> 
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="cs_testimonial_1_thumb" data-background="/assets/img/testimonial_img.png">
            <div className="cs_testimonial_1_quote_wrap">
              <div className="cs_testimonial_1_quote cs_accent_bg cs_center wow zoomIn" data-wow-duration="0.9s" data-wow-delay="0.25s">
                <svg width="40" height="30" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 0H3.75C1.68213 0 0 1.68213 0 3.75V15C0 17.0679 1.68213 18.75 3.75 18.75H8.79578L6.89819 28.5114C6.82678 28.8782 6.92321 29.2572 7.16064 29.5453C7.39806 29.8334 7.75146 30 8.125 30H12.1747C13.2617 30 14.2279 29.2889 14.5569 28.2593L18.1958 19.6277C18.2165 19.5783 18.2342 19.5276 18.2483 19.4763C18.5815 18.2788 18.75 17.0404 18.75 15.7959V3.75C18.75 1.68213 17.0679 0 15 0Z" fill="white"/>
                  <path d="M36.25 0H25C22.9321 0 21.25 1.68213 21.25 3.75V15C21.25 17.0679 22.9321 18.75 25 18.75H30.0464L28.1482 28.5114C28.0762 28.8782 28.1726 29.2572 28.4106 29.5453C28.6475 29.8334 29.0015 30 29.375 30H33.4253C34.5129 30 35.4785 29.2889 35.8069 28.2587L39.4458 19.6277C39.4665 19.5782 39.4836 19.5276 39.4983 19.4763C39.8315 18.2776 40 17.0392 40 15.7959V3.75C40 1.68213 38.3179 0 36.25 0Z" fill="white"/>
                </svg>            
              </div>
            </div>
          </div>
          <div className="cs_height_120 cs_height_lg_80"></div>
        </section>
    );
};

export default Testimonial;