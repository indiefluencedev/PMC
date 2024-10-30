const Form2 = () => {
    return (
        <form action="#">
        <div className="row">
            <div className="col-lg-6">
            <input type="text" placeholder="Your name" className="cs_form_field cs_mb_25" />
            </div>
            <div className="col-lg-6">
            <input type="text" placeholder="Your Email" className="cs_form_field cs_mb_25" />
            </div>
        </div>
        <input type="text" placeholder="Website" className="cs_form_field cs_mb_25" />
        <textarea cols="30" rows="5" placeholder="Write a message...." className="cs_form_field cs_mb_25"></textarea>
        <button className="cs_btn cs_style_1 w-100" type="submit">
            <span>Post Comment</span>
        </button>
        </form>
    );
};

export default Form2;