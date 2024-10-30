import Slider from "react-slick";
import data from "../../Data/team.json";
import { useRef } from "react";
import SectionTitle from "../Common/SectionTitle";

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
                    Title="Meet Our Team of Expert"
                    SubTitle="Expert Team"
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
                        <div key={i} className="cs_slide">
                            <div className="cs_team_member cs_style_1 text-center">
                            <div className="cs_team_member_in">
                                <div className="cs_team_member_thumb">
                                <img src={item.img} alt="" />
                                <div className="cs_member_social_btns">
                                    <span className="cs_member_social_item cs_center">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.625 2.875C0.625 4.2207 1.7168 5.3125 3.0625 5.3125C3.72266 5.3125 4.33203 5.05859 4.76367 4.65234L7.15039 5.8457C7.15039 5.92188 7.15039 6.02344 7.15039 6.125C7.15039 6.22656 7.15039 6.32812 7.15039 6.42969L4.76367 7.62305C4.33203 7.2168 3.72266 6.9375 3.0625 6.9375C1.7168 6.9375 0.625 8.0293 0.625 9.375C0.625 10.7207 1.7168 11.8125 3.0625 11.8125C4.43359 11.8125 5.5 10.7207 5.5 9.375C5.5 9.27344 5.5 9.17188 5.5 9.0957L7.88672 7.90234C8.31836 8.30859 8.92773 8.5625 9.5625 8.5625C10.9336 8.5625 12 7.4707 12 6.125C12 4.7793 10.9336 3.6875 9.5625 3.6875C8.92773 3.6875 8.31836 3.9668 7.88672 4.37305L5.5 3.17969C5.5 3.07812 5.5 2.97656 5.5 2.875C5.5 1.5293 4.43359 0.4375 3.0625 0.4375C1.7168 0.4375 0.625 1.5293 0.625 2.875ZM9.58789 6.9375C9.13086 6.9375 8.77539 6.58203 8.77539 6.125C8.77539 5.69336 9.13086 5.3125 9.58789 5.3125C10.0195 5.3125 10.4004 5.69336 10.4004 6.125C10.4004 6.58203 10.0195 6.9375 9.58789 6.9375ZM3.0625 2.0625C3.51953 2.0625 3.875 2.44336 3.875 2.875C3.875 3.33203 3.51953 3.6875 3.0625 3.6875C2.63086 3.6875 2.25 3.33203 2.25 2.875C2.25 2.44336 2.63086 2.0625 3.0625 2.0625ZM3.0625 10.1875C2.63086 10.1875 2.25 9.83203 2.25 9.375C2.25 8.94336 2.63086 8.5625 3.0625 8.5625C3.51953 8.5625 3.875 8.94336 3.875 9.375C3.875 9.83203 3.51953 10.1875 3.0625 10.1875Z" fill="#010F34"/>
                                    </svg>
                                    </span>
                                    <a href="#" className="cs_member_social_item cs_center">
                                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.53906 12H0.177734V4.4082H2.53906V12ZM1.3457 3.39258C0.609375 3.39258 0 2.75781 0 1.99609C0 0.955078 1.11719 0.294922 2.03125 0.828125C2.46289 1.05664 2.7168 1.51367 2.7168 1.99609C2.7168 2.75781 2.10742 3.39258 1.3457 3.39258ZM11.3496 12H9.01367V8.31836C9.01367 7.42969 8.98828 6.3125 7.76953 6.3125C6.55078 6.3125 6.37305 7.25195 6.37305 8.24219V12H4.01172V4.4082H6.27148V5.44922H6.29688C6.62695 4.86523 7.38867 4.23047 8.53125 4.23047C10.918 4.23047 11.375 5.80469 11.375 7.83594V12H11.3496Z" fill="white"/>
                                      </svg>
                                    </a>
                                    <a href="#" className="cs_member_social_item cs_center">
                                      <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.6543 3.48438C11.6543 3.61133 11.6543 3.71289 11.6543 3.83984C11.6543 7.36914 8.98828 11.4062 4.08789 11.4062C2.56445 11.4062 1.16797 10.9746 0 10.2129C0.203125 10.2383 0.40625 10.2637 0.634766 10.2637C1.87891 10.2637 3.02148 9.83203 3.93555 9.12109C2.76758 9.0957 1.77734 8.33398 1.44727 7.26758C1.625 7.29297 1.77734 7.31836 1.95508 7.31836C2.18359 7.31836 2.4375 7.26758 2.64062 7.2168C1.42188 6.96289 0.507812 5.89648 0.507812 4.60156V4.57617C0.863281 4.7793 1.29492 4.88086 1.72656 4.90625C0.990234 4.42383 0.533203 3.61133 0.533203 2.69727C0.533203 2.18945 0.660156 1.73242 0.888672 1.35156C2.20898 2.95117 4.18945 4.01758 6.39844 4.14453C6.34766 3.94141 6.32227 3.73828 6.32227 3.53516C6.32227 2.0625 7.51562 0.869141 8.98828 0.869141C9.75 0.869141 10.4355 1.17383 10.9434 1.70703C11.5273 1.58008 12.1113 1.35156 12.6191 1.04688C12.416 1.68164 12.0098 2.18945 11.4512 2.51953C11.9844 2.46875 12.5176 2.31641 12.9746 2.11328C12.6191 2.64648 12.1621 3.10352 11.6543 3.48438Z" fill="white"/>
                                      </svg>
                                    </a>
                                    <a href="#" className="cs_member_social_item cs_center">
                                      <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M11.3496 2.53516C11.2988 3.65234 10.5371 5.15039 9.03906 7.08008C7.49023 9.08594 6.19531 10.1016 5.10352 10.1016C4.44336 10.1016 3.88477 9.49219 3.42773 8.27344C2.53906 4.97266 2.1582 3.06836 1.42188 3.06836C1.32031 3.06836 1.04102 3.24609 0.533203 3.60156L0 2.91602C1.29492 1.74805 2.53906 0.478516 3.32617 0.402344C4.21484 0.326172 4.77344 0.935547 4.97656 2.23047C5.6875 6.82617 6.01758 7.53711 7.33789 5.42969C7.82031 4.69336 8.07422 4.10938 8.125 3.72852C8.22656 2.56055 7.21094 2.63672 6.5 2.94141C7.05859 1.11328 8.125 0.224609 9.69922 0.275391C10.8672 0.300781 11.4258 1.0625 11.3496 2.53516Z" fill="white"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="cs_member_social_item cs_center">
                                      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.08398 7.9375H5.17969V13.625H2.64062V7.9375H0.558594V5.60156H2.64062V3.79883C2.64062 1.76758 3.85938 0.625 5.71289 0.625C6.60156 0.625 7.54102 0.802734 7.54102 0.802734V2.80859H6.5C5.48438 2.80859 5.17969 3.41797 5.17969 4.07812V5.60156H7.43945L7.08398 7.9375Z" fill="white"/>
                                      </svg>
                                    </a>
                                </div>
                                </div>
                                <div className="cs_team_member_info">
                                <h3 className="cs_team_member_name cs_fs_24 cs_semibold cs_mb_4">{item.title}</h3>
                                <p className="cs_team_member_designation cs_fs_14 mb-0">{item.subTitle}</p>
                                </div>
                                <div className="cs_team_member_phone_number cs_fs_18 cs_heading_color">
                                <img src="assets/img/icons/phone_icon_2.svg" alt="" />
                                {item.number}
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