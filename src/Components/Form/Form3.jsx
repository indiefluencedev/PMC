const Form3 = () => {
    return (
        <form action="#" className="cs_contact_form">
            <h2 className="text-center cs_fs_36 cs_semibold">Book An Appointment</h2>
            <input type="text" className="cs_form_field cs_mb_22" placeholder="Your Name" />
            <input type="email" className="cs_form_field cs_mb_22" placeholder="Your Email" />
            <input type="text" className="cs_form_field cs_mb_22" placeholder="Select Subjects" />
            <textarea cols="30" rows="4" className="cs_form_field cs_mb_22" placeholder="Write Message..."></textarea>
            <button className="cs_btn cs_style_1 w-100" type="submit"><span>Appointment Now</span></button>
        </form>
    );
};

export default Form3;