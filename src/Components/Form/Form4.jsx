const Form4 = ({Title,SubTitle}) => {
    return (
        <div className="cs_get_quote_content">
            <div className="cs_section_heading cs_style_1">
            <h3 className="cs_section_subtitle cs_accent_color text-uppercase cs_medium cs_fs_20 cs_mb_10">
                <img src="/assets/img/icons/fan.svg" alt="" className="cs_section_subheading_icon" />
               { SubTitle }
            </h3>
            <h2 className="cs_section_title cs_fs_48 cs_semibold mb-0">{Title}</h2>
            </div>
            <div className="cs_height_45 cs_height_lg_45"></div>
            <form action="#" className="cs_get_quote_form row cs_gap_y_30">
                <div className="col-sm-6">
                    <input type="text" className="cs_form_field" placeholder="Your Name" />
                </div>
                <div className="col-sm-6">
                    <input type="text" className="cs_form_field" placeholder="Last Name" />
                </div>
                <div className="col-sm-6">
                    <input type="text" className="cs_form_field" placeholder="Your Email" />
                </div>
                <div className="col-sm-6">
                    <input type="text" className="cs_form_field" placeholder="Subject" />
                </div>
                <div className="col-lg-12">
                    <textarea className="cs_form_field" cols="30" rows="4" placeholder="Write Message..."></textarea>
                </div>
                <div className="col-lg-12">
                    <button type="submit" className="cs_btn cs_style_1 w-100">
                    <span>Appointment Now</span>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.28125 0.71875L13.7812 5.96875C13.9271 6.11458 14 6.29167 14 6.5C14 6.70833 13.9271 6.88542 13.7812 7.03125L8.28125 12.2812C7.90625 12.5729 7.55208 12.5729 7.21875 12.2812C6.92708 11.9062 6.92708 11.5521 7.21875 11.2188L11.375 7.25H0.75C0.291667 7.20833 0.0416667 6.95833 0 6.5C0.0416667 6.04167 0.291667 5.79167 0.75 5.75H11.375L7.21875 1.78125C6.92708 1.44792 6.92708 1.09375 7.21875 0.71875C7.55208 0.427083 7.90625 0.427083 8.28125 0.71875Z" fill="currentColor"></path>
                    </svg>                
                    </button>
                </div>
            </form>
      </div>
    );
};

export default Form4;