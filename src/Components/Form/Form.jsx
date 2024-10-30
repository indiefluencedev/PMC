
const Form = () => {
    return (
        <div className="service-form">
            <h2 className="cs_sidebar_widget_heading cs_fs_24 cs_semibold">Ask Question</h2>
            <form>
                <input type="text" className="cs_form_field cs_mb_15" placeholder="Your Name" />
                <input type="text" className="cs_form_field cs_mb_15" placeholder="Email Address" />
                <input type="text" className="cs_form_field cs_mb_15" placeholder="Phone Number" />
                <textarea cols="30" rows="3" className="cs_form_field cs_mb_15" placeholder="Write Message..."></textarea>
                <button className="cs_btn cs_style_1 w-100" type="submit"><span>Ask Question Now</span></button>
            </form>            
    </div>
    );
};

export default Form;