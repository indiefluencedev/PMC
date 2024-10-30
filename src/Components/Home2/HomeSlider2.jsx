import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Slider from "react-slick";
import data from "../../Data/homeSlider2.json";

const HomeSlider2 = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);

      const MovingText = [
        'Emergency Services ',
        'Keep Outdoor Unit Clear',
        'Filter Replacement',
      ];     

      const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipeToSlide: true,
      };      

    return (
        <section className="cs_hero cs_style_2 cs_bg_filed homeSlider-area2">
            <div className="cs_slider cs_style_1">
                <Slider {...settings}>
                    {data.map((item, i) => (   
                        <div key={i} className="cs_slide">
                            <div className="cs_hero_in cs_center">
                                <div className="container wow fadeInRight" data-wow-duration="0.9s" data-wow-delay="0.25s">
                                <div className="cs_hero_text">
                                    <h3 className="cs_hero_mini_title cs_white_color cs_fs_18 cs_medium cs_mb_8">
                                    <img src="/assets/img/icons/fan.svg" alt="" />
                                    {item.subTitle}
                                    </h3>
                                    <h1 className="cs_hero_title cs_white_color cs_fs_74 cs_mb_18">{item.title}</h1>
                                    <p className="cs_hero_subtitle cs_white_color cs_mb_34">{item.desc}</p>
                                    <div className="cs_hero_btns">
                                    <a href={item.link} className="cs_btn cs_style_1">
                                        <span>Describe More</span>
                                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.28125 0.71875L13.7812 5.96875C13.9271 6.11458 14 6.29167 14 6.5C14 6.70833 13.9271 6.88542 13.7812 7.03125L8.28125 12.2812C7.90625 12.5729 7.55208 12.5729 7.21875 12.2812C6.92708 11.9062 6.92708 11.5521 7.21875 11.2188L11.375 7.25H0.75C0.291667 7.20833 0.0416667 6.95833 0 6.5C0.0416667 6.04167 0.291667 5.79167 0.75 5.75H11.375L7.21875 1.78125C6.92708 1.44792 6.92708 1.09375 7.21875 0.71875C7.55208 0.427083 7.90625 0.427083 8.28125 0.71875Z" fill="currentColor"/>
                                        </svg>                
                                    </a>
                                    </div>
                                </div>
                                </div>
                                <div className="cs_hero_bg cs_bg_filed" data-background={item.bgImg}>
                                <div className="cs_hero_bg_shape_1 position-absolute cs_accent_color">
                                    <img src="/assets/img/icons/hero_icon.svg" alt="" />
                                </div>
                                <div className="cs_hero_bg_shape_2 position-absolute cs_accent_color">
                                    <img src="/assets/img/icons/hero_icon.svg" alt="" />
                                </div>
                                <div className="cs_hero_bg_shape_3 position-absolute cs_accent_color">
                                    <img src="/assets/img/icons/hero_icon.svg" alt="" />
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="cs_hero_shape cs_accent_bg cs_bg_filed" data-background="assets/img/hero_shape_1.svg"></div>
            <div className="cs_moving_section_wrap">
                <div className="cs_moving_section_in">
                <div className="cs_moving_section cs_moving_duration_40 cs_brand_2_wrap">
                    <ul className="cs_hero_feature_list cs_mp_0 cs_fs_30 cs_semibold">
                    {MovingText.map((item, i) => ( 
                    <li key={i}>
                        <img src="/assets/img/icons/hero_icon.svg" alt="icon" />  
                        {item} 
                    </li>
                    ))}
                    </ul>
                </div>
                <div className="cs_moving_section cs_moving_duration_40 cs_brand_2_wrap">
                    <ul className="cs_hero_feature_list cs_mp_0 cs_fs_30 cs_semibold">
                    {MovingText.map((item, i) => ( 
                    <li key={i}>
                        <img src="/assets/img/icons/hero_icon.svg" alt="icon" />  
                        {item} 
                    </li>
                    ))}
                    </ul>
                </div>
                </div>
            </div>
            </section>
    );
};

export default HomeSlider2;