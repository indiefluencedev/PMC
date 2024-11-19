import Slider from "react-slick";
import data from "../../Data/team2.json";
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";
import { Link } from 'react-router-dom';

const Team = () => {

    const sliderRef = useRef(null);

    const next = () => {
      sliderRef.current.slickNext();
    };
  
    const previous = () => {
      sliderRef.current.slickPrev();
    };
     
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 4,
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
        <section>
          <div className="cs_height_115 cs_height_lg_70"></div>
          <div className="container">
            <div className="cs_slider cs_style_1 cs_slider_gap_30">
              <div className="cs_slider_heading_1">
                <div className="cs_section_heading cs_style_1">
                <SectionTitle
                    Title="Meet our team of expert"
                    SubTitle="Expert team"
                ></SectionTitle>
                </div>
                <div className="cs_slider_arrows cs_style_2 cs_hide_md">
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
              <div className="cs_height_45 cs_height_lg_45"></div>
                <Slider ref={sliderRef} {...settings}>
                    {data.map((item, i) => (
                          <div key={i} className="col-xl-3 col-lg-4 col-sm-6">
                          <div className="cs_team_member cs_style_1 text-center">
                          <div className="cs_team_member_in">
                              <div className="cs_team_member_thumb">
                              <img src={item.image[1]} alt="" />
                             
                              </div>
                              <div className="cs_team_member_info">
                              <h3 className="cs_team_member_name cs_fs_24 cs_semibold cs_mb_4">
                                  <Link to="/team/team-details">{item.Category}</Link>
                              </h3>
                              <p className="cs_team_member_designation cs_fs_14 mb-0">{item.Category}</p>
                              </div>
                              <div className="cs_team_member_phone_number cs_fs_18 cs_heading_color">
                              {/* <img src="/assets/img/icons/phone_icon_2.svg" alt="" /> */}
                              <p>KNOW MORE</p>
                              </div>
                          </div>
                          <div className="cs_team_member_shape cs_accent_color">
                              <svg width="300" height="407" viewBox="0 0 300 407" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 0.498047V407H300V212.548C175.575 177.381 69.7706 101.188 0 0.498047Z" fill="currentColor"/>
                              </svg>                                       
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

export default Team;
