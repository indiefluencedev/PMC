import BreadCumb from "../Components/Common/BreadCumb";
import ContactCard from "../Components/ContactCard/ContactCard"
import Form3 from "../Components/Form/Form3";

const Contact = () => {
    return (
        <div className="contact-page">
            <BreadCumb Title="Contact Us"></BreadCumb>
            <section>
                <div className="cs_height_120 cs_height_lg_80"></div>
                <div className="container">
                    <div className="row cs_gap_y_50">
                    <div className="col-xxl-6 col-lg-7">
                        <h2 className="cs_fs_48 cs_semibold cs_mb_22">Contact Information</h2>
                        <p className="cs_mb_30">Our QuickCool Installation service provides fast and efficient installation of new air conditioning units. Our certified technicians will ensure your system is air an  installed correctly and safely,</p>
                        <div className="row cs_gap_y_30 cs_row_gap_30">
                        <ContactCard
                            img="/assets/img/icons/contact_icon_1.svg"
                            Title="Our Address"
                            Content="6391 Elgin St. Celina, <br>Delaware 10299"
                        >
                        </ContactCard>
                        <ContactCard
                            img="/assets/img/icons/contact_icon_2.svg"
                            Title="Phone Number"
                            Content="+(163)-5565-0697 <br>(+578) 587 89168"
                        >
                        </ContactCard>
                        <ContactCard
                            img="/assets/img/icons/contact_icon_3.svg"
                            Title="Email Address"
                            Content="info@gmail.com <br>demo@gmail.com"
                        >
                        </ContactCard>
                        <ContactCard
                            img="/assets/img/icons/contact_icon_4.svg"
                            Title="Working Time"
                            Content="Work Time: Sun - Fri <br>10AM - 6PM"
                        >
                        </ContactCard>                        
                        </div>
                        <div className="cs_height_35 cs_height_lg_35"></div>
                        <h3 className="cs_fs_24 cs_semibold cs_mb_10">Follow The Social Media:</h3>
                        <p className="cs_mb_20">Ensure your AC system is ready for the hottest days with our Comfort Check Tune-Up</p>
                        <div className="cs_social_btns cs_style_1 cs_type_1">
                        <a href="#" className="cs_social_btn cs_center">
                        <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.75391 8.625H5.70312V14.75H2.96875V8.625H0.726562V6.10938H2.96875V4.16797C2.96875 1.98047 4.28125 0.75 6.27734 0.75C7.23438 0.75 8.24609 0.941406 8.24609 0.941406V3.10156H7.125C6.03125 3.10156 5.70312 3.75781 5.70312 4.46875V6.10938H8.13672L7.75391 8.625Z" fill="#010F34"/>
                                </svg>
                        </a>
                        <a href="#" className="cs_social_btn cs_center">
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.5508 2.90625C12.5508 3.04297 12.5508 3.15234 12.5508 3.28906C12.5508 7.08984 9.67969 11.4375 4.40234 11.4375C2.76172 11.4375 1.25781 10.9727 0 10.1523C0.21875 10.1797 0.4375 10.207 0.683594 10.207C2.02344 10.207 3.25391 9.74219 4.23828 8.97656C2.98047 8.94922 1.91406 8.12891 1.55859 6.98047C1.75 7.00781 1.91406 7.03516 2.10547 7.03516C2.35156 7.03516 2.625 6.98047 2.84375 6.92578C1.53125 6.65234 0.546875 5.50391 0.546875 4.10938V4.08203C0.929688 4.30078 1.39453 4.41016 1.85938 4.4375C1.06641 3.91797 0.574219 3.04297 0.574219 2.05859C0.574219 1.51172 0.710938 1.01953 0.957031 0.609375C2.37891 2.33203 4.51172 3.48047 6.89062 3.61719C6.83594 3.39844 6.80859 3.17969 6.80859 2.96094C6.80859 1.375 8.09375 0.0898438 9.67969 0.0898438C10.5 0.0898438 11.2383 0.417969 11.7852 0.992188C12.4141 0.855469 13.043 0.609375 13.5898 0.28125C13.3711 0.964844 12.9336 1.51172 12.332 1.86719C12.9062 1.8125 13.4805 1.64844 13.9727 1.42969C13.5898 2.00391 13.0977 2.49609 12.5508 2.90625Z" fill="#010F34"/>
                                </svg>
                        </a>
                        <a href="#" className="cs_social_btn cs_center">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.10938 13H0.566406V4.82422H3.10938V13ZM1.82422 3.73047C1.03125 3.73047 0.375 3.04688 0.375 2.22656C0.375 1.10547 1.57812 0.394531 2.5625 0.96875C3.02734 1.21484 3.30078 1.70703 3.30078 2.22656C3.30078 3.04688 2.64453 3.73047 1.82422 3.73047ZM12.5977 13H10.082V9.03516C10.082 8.07812 10.0547 6.875 8.74219 6.875C7.42969 6.875 7.23828 7.88672 7.23828 8.95312V13H4.69531V4.82422H7.12891V5.94531H7.15625C7.51172 5.31641 8.33203 4.63281 9.5625 4.63281C12.1328 4.63281 12.625 6.32812 12.625 8.51562V13H12.5977Z" fill="#010F34"/>
                                </svg>
                        </a>
                        <a href="#" className="cs_social_btn cs_center">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3.40625C9.96875 3.40625 11.5938 5.03125 11.5938 7C11.5938 9 9.96875 10.5938 8 10.5938C6 10.5938 4.40625 9 4.40625 7C4.40625 5.03125 6 3.40625 8 3.40625ZM8 9.34375C9.28125 9.34375 10.3125 8.3125 10.3125 7C10.3125 5.71875 9.28125 4.6875 8 4.6875C6.6875 4.6875 5.65625 5.71875 5.65625 7C5.65625 8.3125 6.71875 9.34375 8 9.34375ZM12.5625 3.28125C12.5625 2.8125 12.1875 2.4375 11.7188 2.4375C11.25 2.4375 10.875 2.8125 10.875 3.28125C10.875 3.75 11.25 4.125 11.7188 4.125C12.1875 4.125 12.5625 3.75 12.5625 3.28125ZM14.9375 4.125C15 5.28125 15 8.75 14.9375 9.90625C14.875 11.0312 14.625 12 13.8125 12.8438C13 13.6562 12 13.9062 10.875 13.9688C9.71875 14.0312 6.25 14.0312 5.09375 13.9688C3.96875 13.9062 3 13.6562 2.15625 12.8438C1.34375 12 1.09375 11.0312 1.03125 9.90625C0.96875 8.75 0.96875 5.28125 1.03125 4.125C1.09375 3 1.34375 2 2.15625 1.1875C3 0.375 3.96875 0.125 5.09375 0.0625C6.25 0 9.71875 0 10.875 0.0625C12 0.125 13 0.375 13.8125 1.1875C14.625 2 14.875 3 14.9375 4.125ZM13.4375 11.125C13.8125 10.2188 13.7188 8.03125 13.7188 7C13.7188 6 13.8125 3.8125 13.4375 2.875C13.1875 2.28125 12.7188 1.78125 12.125 1.5625C11.1875 1.1875 9 1.28125 8 1.28125C6.96875 1.28125 4.78125 1.1875 3.875 1.5625C3.25 1.8125 2.78125 2.28125 2.53125 2.875C2.15625 3.8125 2.25 6 2.25 7C2.25 8.03125 2.15625 10.2188 2.53125 11.125C2.78125 11.75 3.25 12.2188 3.875 12.4688C4.78125 12.8438 6.96875 12.75 8 12.75C9 12.75 11.1875 12.8438 12.125 12.4688C12.7188 12.2188 13.2188 11.75 13.4375 11.125Z" fill="#010F34"/>
                        </svg>
                        </a>
                        </div>
                    </div>
                    <div className="col-xxl-5 offset-xxl-1 col-lg-5">
                        <Form3></Form3>
                    </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80"></div>
                </section>
                <div className="cs_map">
                    <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd" allowfullscreen></iframe>
                </div>

        </div>
    );
};

export default Contact;