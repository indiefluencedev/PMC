import { Link } from "react-router-dom";
import SectionTitle from "../Common/SectionTitle";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import data from '../../Data/service2.json';

const Services2 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);
    
      const [nav1, setNav1] = useState();
      const [nav2, setNav2] = useState();
    
      const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true
      };
    
      const settingsNavSlider = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: false,
        focusOnSelect: true,
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
        <section className="cs_bg_filed" data-background="/assets/img/service_bg_2.svg">
            <div className="cs_height_115 cs_height_lg_70"></div>
            <div className="container">
                <div className="cs_slider_heading_1">
                    <div className="cs_section_heading cs_style_1">
                    <SectionTitle
                        SubTitle="Our Services"
                        Title="Where Every Breath Feels <br/>Fresh And Cool"
                    ></SectionTitle>
                    </div>
                </div>
                <div className="cs_height_45 cs_height_lg_45"></div>
                <div className="cs_service_product_nav slick-slider cs_slider_gap_30 wow fadeInUp" data-wow-duration="0.9s" data-wow-delay="0.25s">
                <Slider asNavFor={nav1} ref={slider2 => setNav2(slider2)} {...settingsNavSlider}>
                {data.map((item, i) => (
                    <div key={i} className="cs_slide_item_sm">
                    <div className="cs_service_card cs_style_2 text-center cs_center">
                        <div className="cs_service_card_in">
                        <div className="cs_service_card_icon cs_mb_20">
                            <img src={item.icon} alt="" />
                        </div>
                        <h3 className="cs_service_card_title cs_fs_24 cs_semibold mb-0">{item.SubTitle}</h3>
                        </div>
                        <div className="cs_service_card_bg">
                        <img src="/assets/img/shapes/service_shape_1.svg" alt="" className="cs_service_card_shape_1" />
                        <img src="/assets/img/shapes/service_shape_1.svg" alt="" className="cs_service_card_shape_2" />
                        <svg width="282" height="229" viewBox="0 0 282 229" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 9C0 6.23858 2.23858 4 5 4H277C279.761 4 282 6.23858 282 9V189.6C282 196.796 276.889 202.979 269.821 204.332L163.569 224.678C148.658 227.534 133.342 227.534 118.431 224.678L12.1789 204.332C5.11085 202.979 0 196.796 0 189.6V9Z" fill="#FF5500"/>
                            <path d="M0 5C0 2.23857 2.23858 0 5 0H277C279.761 0 282 2.23858 282 5V187.426C282 194.7 276.781 200.925 269.619 202.195L161.95 221.285C148.091 223.743 133.909 223.743 120.05 221.285L12.3813 202.195C5.21895 200.925 0 194.7 0 187.426V5Z" fill="white"/>
                        </svg>                               
                        </div>
                    </div>
                    </div>
                ))}
                </Slider>

                </div>
                <div className="cs_height_40 cs_height_lg_40"></div>
                <div className="cs_service_product_thumb slick-slider">
                <Slider asNavFor={nav2} ref={slider1 => setNav1(slider1)} {...settings}>
                {data.map((item, i) => (
                    <div key={i} className="cs_slide_item_lg">
                    <div className="cs_service_card_2_details cs_white_bg">
                        <div className="cs_service_card_2_details_left">
                        <h2 className="cs_fs_36 cs_semibold cs_mb_14">{item.title}</h2>
                        <p className="cs_mb_30">{item.desc}</p>
                        <ul className="cs_list cs_style_1 cs_mp_0 cs_fs_18 cs_medium cs_heading_font">
                        {item.Features.map((Feature, index) => (
                            <li key={index}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="2"/>
                                <g>
                                <path d="M13.7676 5.63463C13.4582 5.32482 12.9558 5.32501 12.646 5.63463L7.59787 10.683L5.35419 8.4393C5.04438 8.12949 4.54217 8.12949 4.23236 8.4393C3.92255 8.74912 3.92255 9.25132 4.23236 9.56113L7.03684 12.3656C7.19165 12.5204 7.39464 12.598 7.59765 12.598C7.80067 12.598 8.00386 12.5206 8.15867 12.3656L13.7676 6.75644C14.0775 6.44684 14.0775 5.94443 13.7676 5.63463Z" fill="currentColor"/>
                                </g>
                                <defs>
                                <clipPath>
                                <rect width="10" height="10" fill="white" transform="translate(4 4)"/>
                                </clipPath>
                                </defs>
                            </svg>
                            {Feature}
                            </li>
                            ))}
                        </ul>
                        <Link to='/service/service-details' className="cs_btn cs_style_1">
                            <span>READ MORE</span>
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.28125 0.71875L13.7812 5.96875C13.9271 6.11458 14 6.29167 14 6.5C14 6.70833 13.9271 6.88542 13.7812 7.03125L8.28125 12.2812C7.90625 12.5729 7.55208 12.5729 7.21875 12.2812C6.92708 11.9062 6.92708 11.5521 7.21875 11.2188L11.375 7.25H0.75C0.291667 7.20833 0.0416667 6.95833 0 6.5C0.0416667 6.04167 0.291667 5.79167 0.75 5.75H11.375L7.21875 1.78125C6.92708 1.44792 6.92708 1.09375 7.21875 0.71875C7.55208 0.427083 7.90625 0.427083 8.28125 0.71875Z" fill="currentColor"></path>
                            </svg>                
                            </Link>
                        </div>
                        <div className="cs_service_card_2_details_thumb">
                        <img src={item.img} alt="" />           
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

export default Services2;