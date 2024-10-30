import Slider from "react-slick";
import data from '../../Data/testimonial2.json';
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import SectionTitle from "../Common/SectionTitle";

const Testimonial3 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
        responsive: [
          {
            breakpoint: 1399,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
            }
          },{
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };

    return (
        <section className="cs_testimonial_1_section cs_bg_filed" data-background="/assets/img/testimonial_bg_2.jpg">
        <div className="cs_height_115 cs_height_lg_70"></div>
        <div className="container">
          <div className="cs_section_heading cs_style_1">
           <SectionTitle
                    Title="What Clients Say <br/>About Us"
                    SubTitle="Testimonials"                
                >
            </SectionTitle>
          </div>
          <div className="cs_height_45 cs_height_lg_45"></div>
          <div className="cs_slider cs_style_1 cs_slider_gap_30">
                <Slider {...settings}>
                    {data.map((item, i) => (
                        <div key={i} className="cs_slide">
                            <div className="cs_testimonial cs_style_2 cs_white_bg text-center">
                                <div className="cs_testimonial_in">
                                <img src={item.img} alt="icon" className="cs_testimonial_avatar_img" />
                                <h2 className="cs_testimonial_category cs_fs_18 cs_medium cs_mb_2">{item.review}</h2>
                                <div className="cs_rating cs_accent_color" data-rating="4.5">
                                <svg width="90" height="14" viewBox="0 0 90 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.07031 1.26562C6.35156 0.703125 7.14844 0.726562 7.40625 1.26562L8.95312 4.38281L12.375 4.875C12.9844 4.96875 13.2188 5.71875 12.7734 6.16406L10.3125 8.57812L10.8984 11.9766C10.9922 12.5859 10.3359 13.0547 9.79688 12.7734L6.75 11.1562L3.67969 12.7734C3.14062 13.0547 2.48438 12.5859 2.57812 11.9766L3.16406 8.57812L0.703125 6.16406C0.257812 5.71875 0.492188 4.96875 1.10156 4.875L4.54688 4.38281L6.07031 1.26562Z" fill="#FF5500"/>
                                    <path d="M25.0703 1.26562C25.3516 0.703125 26.1484 0.726562 26.4062 1.26562L27.9531 4.38281L31.375 4.875C31.9844 4.96875 32.2188 5.71875 31.7734 6.16406L29.3125 8.57812L29.8984 11.9766C29.9922 12.5859 29.3359 13.0547 28.7969 12.7734L25.75 11.1562L22.6797 12.7734C22.1406 13.0547 21.4844 12.5859 21.5781 11.9766L22.1641 8.57812L19.7031 6.16406C19.2578 5.71875 19.4922 4.96875 20.1016 4.875L23.5469 4.38281L25.0703 1.26562Z" fill="#FF5500"/>
                                    <path d="M44.0703 1.26562C44.3516 0.703125 45.1484 0.726562 45.4062 1.26562L46.9531 4.38281L50.375 4.875C50.9844 4.96875 51.2188 5.71875 50.7734 6.16406L48.3125 8.57812L48.8984 11.9766C48.9922 12.5859 48.3359 13.0547 47.7969 12.7734L44.75 11.1562L41.6797 12.7734C41.1406 13.0547 40.4844 12.5859 40.5781 11.9766L41.1641 8.57812L38.7031 6.16406C38.2578 5.71875 38.4922 4.96875 39.1016 4.875L42.5469 4.38281L44.0703 1.26562Z" fill="#FF5500"/>
                                    <path d="M63.0703 1.26562C63.3516 0.703125 64.1484 0.726562 64.4062 1.26562L65.9531 4.38281L69.375 4.875C69.9844 4.96875 70.2188 5.71875 69.7734 6.16406L67.3125 8.57812L67.8984 11.9766C67.9922 12.5859 67.3359 13.0547 66.7969 12.7734L63.75 11.1562L60.6797 12.7734C60.1406 13.0547 59.4844 12.5859 59.5781 11.9766L60.1641 8.57812L57.7031 6.16406C57.2578 5.71875 57.4922 4.96875 58.1016 4.875L61.5469 4.38281L63.0703 1.26562Z" fill="#FF5500"/>
                                    <path d="M82.0703 1.26562C82.3516 0.703125 83.1484 0.726562 83.4062 1.26562L84.9531 4.38281L88.375 4.875C88.9844 4.96875 89.2188 5.71875 88.7734 6.16406L86.3125 8.57812L86.8984 11.9766C86.9922 12.5859 86.3359 13.0547 85.7969 12.7734L82.75 11.1562L79.6797 12.7734C79.1406 13.0547 78.4844 12.5859 78.5781 11.9766L79.1641 8.57812L76.7031 6.16406C76.2578 5.71875 76.4922 4.96875 77.1016 4.875L80.5469 4.38281L82.0703 1.26562Z" fill="#FF5500"/>
                                    </svg>
                                    </div>
                                </div>
                                <blockquote className="cs_testimonial_blockquote cs_mb_15 cs_fs_16">{item.desc}</blockquote>
                                <div className="cs_testimonial_avatar_box">
                                    <h3 className="cs_fs_24 cs_mb_1">{item.title}</h3>
                                    <p className="mb-0">{item.subTitle}</p>
                                </div>
                                </div>

                            </div>
                    ))}
                </Slider>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Testimonial3;