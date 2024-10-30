import { Link } from "react-router-dom";

const About = ({Img,TitleUp,Title,Content,FeatureList,NumberContent,Number}) => {
    return (
        <section>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="cs_about cs_style_1">
            <div className="container">
            <div className="row align-items-center cs_gap_y_40">
                <div className="col-xl-6 wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay="0.25s">
                <div className="cs_about_thumb">
                    <img src={Img} alt="About" />
                </div>
                </div>
                <div className="col-xl-6">
                <div className="cs_about_content">
                    <div className="cs_section_heading cs_style_1 cs_mb_22">
                    <h3 className="cs_section_subtitle cs_accent_color text-uppercase cs_medium cs_fs_20 cs_mb_10">
                        <img src="/assets/img/icons/fan.svg" alt="" className="cs_section_subheading_icon" />
                        {TitleUp}
                    </h3>
                   <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0">{Title}</h2>
                    </div>
                    <p className="cs_mb_30">{Content}</p>
                    <div className="cs_tabs">
                    <div className="cs_tab_body">
                        <div className="cs_tab active" id="tab_1">
                        <ul className="cs_list cs_style_1 cs_mp_0 cs_fs_18 cs_medium cs_heading_font">
                        {FeatureList?.map((item, index) => (
                            <li key={index}>
                            <img src="/assets/img/right-arrow.png" alt="arrow" />
                            {item}
                            </li>
                        ))}
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="cs_height_33 cs_height_lg_30"></div>
                    <div className="cs_about_btns">
                    <Link to="about" className="cs_btn cs_style_1">
                        <span>Read More</span>
                        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.28125 0.71875L13.7812 5.96875C13.9271 6.11458 14 6.29167 14 6.5C14 6.70833 13.9271 6.88542 13.7812 7.03125L8.28125 12.2812C7.90625 12.5729 7.55208 12.5729 7.21875 12.2812C6.92708 11.9062 6.92708 11.5521 7.21875 11.2188L11.375 7.25H0.75C0.291667 7.20833 0.0416667 6.95833 0 6.5C0.0416667 6.04167 0.291667 5.79167 0.75 5.75H11.375L7.21875 1.78125C6.92708 1.44792 6.92708 1.09375 7.21875 0.71875C7.55208 0.427083 7.90625 0.427083 8.28125 0.71875Z" fill="currentColor"></path>
                        </svg>                
                    </Link>
                    <div className="cs_about_phone_number">
                        <div className="cs_about_phone_number_icon cs_accent_bg cs_center">
                        <img src="/assets/img/icons/phone_icon.svg" alt="arrow" />
                        </div>
                        <div className="cs_about_phone_number_right">
                        <p className="mb-0">{NumberContent}</p>
                        <h3 className="cs_heading_color cs_fs_18 cs_medium mb-0"><a>{Number}</a></h3>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
        </section>           
    );
};

export default About;