import { Link } from "react-router-dom";

const Footer = () => {

    const Services = [
        'Rapid Cool Installation',
        'Air Flow Optimization',
        'Rapid Drain Unclogging',
        'Frost Guard Emergency',
        'Breeze Balance Calibration',
      ];

    const WorkingHours = [
        {day:'Thu - Fri', time:'9:00 AM - 7:00 PM'},
        {day:'Mon - Wed', time:'8:00 AM - 10:00 PM'},
        {day:'Saturday', time:'7:00 AM - 9:00 PM'},
        {day:'Sunday', time:'Close'},
      ];

      const QuickLinks = [
        {title:'Home', link:'/'},
        {title:'About', link:'/about'},
        {title:'Services', link:'/service'},
        {title:'Blog', link:'/blog'},
        {title:'Contact', link:'/contact'}
      ];      

    return (
        <footer className="cs_footer cs_style_1">
          <div className="cs_footer_top">
            <div className="container">
              <div className="cs_footer_top_in">
                <div className="cs_social_btns cs_style_1">
                  <a href="#" className="cs_social_btn cs_center">
                  <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.71875 9H6.375V16H3.25V9H0.6875V6.125H3.25V3.90625C3.25 1.40625 4.75 0 7.03125 0C8.125 0 9.28125 0.21875 9.28125 0.21875V2.6875H8C6.75 2.6875 6.375 3.4375 6.375 4.25V6.125H9.15625L8.71875 9Z" fill="white"/>
                  </svg>
                  </a>
                  <a href="#" className="cs_social_btn cs_center">
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5508 2.90625C12.5508 3.04297 12.5508 3.15234 12.5508 3.28906C12.5508 7.08984 9.67969 11.4375 4.40234 11.4375C2.76172 11.4375 1.25781 10.9727 0 10.1523C0.21875 10.1797 0.4375 10.207 0.683594 10.207C2.02344 10.207 3.25391 9.74219 4.23828 8.97656C2.98047 8.94922 1.91406 8.12891 1.55859 6.98047C1.75 7.00781 1.91406 7.03516 2.10547 7.03516C2.35156 7.03516 2.625 6.98047 2.84375 6.92578C1.53125 6.65234 0.546875 5.50391 0.546875 4.10938V4.08203C0.929688 4.30078 1.39453 4.41016 1.85938 4.4375C1.06641 3.91797 0.574219 3.04297 0.574219 2.05859C0.574219 1.51172 0.710938 1.01953 0.957031 0.609375C2.37891 2.33203 4.51172 3.48047 6.89062 3.61719C6.83594 3.39844 6.80859 3.17969 6.80859 2.96094C6.80859 1.375 8.09375 0.0898438 9.67969 0.0898438C10.5 0.0898438 11.2383 0.417969 11.7852 0.992188C12.4141 0.855469 13.043 0.609375 13.5898 0.28125C13.3711 0.964844 12.9336 1.51172 12.332 1.86719C12.9062 1.8125 13.4805 1.64844 13.9727 1.42969C13.5898 2.00391 13.0977 2.49609 12.5508 2.90625Z" fill="white"/>
                    </svg>
                  </a>
                  <a href="#" className="cs_social_btn cs_center">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.10938 13H0.566406V4.82422H3.10938V13ZM1.82422 3.73047C1.03125 3.73047 0.375 3.04688 0.375 2.22656C0.375 1.10547 1.57812 0.394531 2.5625 0.96875C3.02734 1.21484 3.30078 1.70703 3.30078 2.22656C3.30078 3.04688 2.64453 3.73047 1.82422 3.73047ZM12.5977 13H10.082V9.03516C10.082 8.07812 10.0547 6.875 8.74219 6.875C7.42969 6.875 7.23828 7.88672 7.23828 8.95312V13H4.69531V4.82422H7.12891V5.94531H7.15625C7.51172 5.31641 8.33203 4.63281 9.5625 4.63281C12.1328 4.63281 12.625 6.32812 12.625 8.51562V13H12.5977Z" fill="white"/>
                    </svg>
                  </a>
                  <a href="#" className="cs_social_btn cs_center">
                  <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.46875 5.25781C7.64453 5.58594 8.21875 6.48828 8.21875 7.69141C8.21875 9.66016 6.57812 10.5078 4.80078 10.5078H0.125V0.828125H4.69141C6.33203 0.828125 7.78125 1.29297 7.78125 3.23438C7.78125 4.19141 7.31641 4.82031 6.46875 5.25781ZM2.23047 2.46875V4.73828H4.39062C5.15625 4.73828 5.70312 4.41016 5.70312 3.58984C5.70312 2.6875 5.01953 2.46875 4.25391 2.46875H2.23047ZM4.52734 8.86719C5.375 8.86719 6.08594 8.56641 6.08594 7.58203C6.08594 6.59766 5.51172 6.1875 4.55469 6.1875H2.23047V8.86719H4.52734ZM14.3164 2.27734V1.32031H10.4062V2.27734H14.3164ZM15.875 7.11719C15.875 7.22656 15.8477 7.36328 15.8477 7.47266H10.7891C10.7891 8.59375 11.3906 9.25 12.5117 9.25C13.0859 9.25 13.8516 8.94922 14.043 8.34766H15.7383C15.2188 9.93359 14.125 10.6992 12.457 10.6992C10.2422 10.6992 8.84766 9.19531 8.84766 7.00781C8.84766 4.90234 10.2969 3.28906 12.457 3.28906C14.6445 3.28906 15.875 5.03906 15.875 7.11719ZM10.7891 6.24219H13.9336C13.8516 5.3125 13.3594 4.76562 12.375 4.76562C11.4727 4.76562 10.8438 5.33984 10.7891 6.24219Z" fill="white"/>
                    </svg>

                  </a>
                </div>
                <div className="cs_footer_logo wow zoomIn" data-wow-duration="0.9s" data-wow-delay="0.25s">
                  <Link to="/"><img src="/assets/img/footer_logo.svg" alt="Logo" /></Link>
                  </div>
                <div className="cs_footer_contact_card">
                  <div className="cs_footer_contact_card_icon cs_white_bg cs_center">
                    <img src="/assets/img/icons/call.svg" alt="" />
                  </div>
                  <div>
                    <p className="cs_white_color cs_fs_14 mb-0">Need Any Cleaning Help</p>
                    <h3 className="mb-0 cs_fs_24 cs_semibold cs_white_color"><a href="tel:+222(789)56825">+222 (789) 568 25</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_main_footer cs_bg_filed cs_primary_bg cs_white_color" data-src="assets/img/footer_bg_1.jpg">
            <div className="container">
              <div className="cs_footer_row cs_type_1">
                <div className="cs_footer_col">
                  <div className="cs_footer_widget">
                    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Our Service</h2>
                    <div className="cs_footer_widget_seperator">
                      <span className="cs_accent_bg"></span>
                      <span className="cs_white_bg"></span>
                      <span className="cs_white_bg"></span>
                    </div>
                    <ul className="cs_footer_menu_2">
                    {Services.map((item, i) => ( 
                      <li key={i}><Link to="/service/service-details">{item}</Link></li>
                    ))}
                    </ul>
                  </div>
                </div>
                <div className="cs_footer_col">
                  <div className="cs_footer_widget">
                    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Working Hours:</h2>
                    <div className="cs_footer_widget_seperator">
                      <span className="cs_accent_bg"></span>
                      <span className="cs_white_bg"></span>
                      <span className="cs_white_bg"></span>
                    </div>
                    <ul className="cs_working_hours">
                    {WorkingHours.map((item, i) => (                        
                      <li key={i}>
                        <span>{item.day}</span>
                        <span>{item.time}</span>
                      </li>
                     ))}
                    </ul>
                  </div>
                </div>
                <div className="cs_footer_col">
                  <div className="cs_footer_widget">
                    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Quick links</h2>
                    <div className="cs_footer_widget_seperator">
                      <span className="cs_accent_bg"></span>
                      <span className="cs_white_bg"></span>
                      <span className="cs_white_bg"></span>
                    </div>
                    <ul className="cs_footer_menu_2">
                    {QuickLinks.map((item, i) => ( 
                      <li key={i}><Link to={item.link}>{item.title} </Link></li>
                    ))}
                    </ul>
                  </div>
                </div>
                <div className="cs_footer_col">
                  <div className="cs_footer_widget">
                    <h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">Recent Post</h2>
                    <div className="cs_footer_widget_seperator">
                      <span className="cs_accent_bg"></span>
                      <span className="cs_white_bg"></span>
                      <span className="cs_white_bg"></span>
                    </div>
                    <ul className="cs_recent_post_widget">
                      <li>
                        <div className="cs_recent_post">
                        <Link to="/blog/blog-details" className="cs_recent_post_thumb">
                            <img src="/assets/img/recent_post_1.jpg" alt="" />
                          </Link>
                          <div className="cs_recent_post_right">
                            <p className="cs_recent_posted_by cs_fs_14">
                            <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.9124 1.625V2.5H8.4124V1.625C8.4124 1.36979 8.49443 1.16016 8.65849 0.996094C8.82255 0.832031 9.03219 0.75 9.2874 0.75C9.54261 0.75 9.75224 0.832031 9.9163 0.996094C10.0804 1.16016 10.1624 1.36979 10.1624 1.625V2.5H11.4749C11.8395 2.51823 12.1494 2.64583 12.4046 2.88281C12.6416 3.13802 12.7692 3.44792 12.7874 3.8125V5.125H0.537398V3.8125C0.555627 3.44792 0.683231 3.13802 0.92021 2.88281C1.17542 2.64583 1.48531 2.51823 1.8499 2.5H3.1624V1.625C3.1624 1.36979 3.24443 1.16016 3.40849 0.996094C3.57255 0.832031 3.78219 0.75 4.0374 0.75C4.29261 0.75 4.50224 0.832031 4.6663 0.996094C4.83037 1.16016 4.9124 1.36979 4.9124 1.625ZM0.537398 6H12.7874V13.4375C12.7692 13.8021 12.6416 14.112 12.4046 14.3672C12.1494 14.6042 11.8395 14.7318 11.4749 14.75H1.8499C1.48531 14.7318 1.17542 14.6042 0.92021 14.3672C0.683231 14.112 0.555627 13.8021 0.537398 13.4375V6ZM2.2874 9.0625C2.30563 9.33594 2.45146 9.48177 2.7249 9.5H3.5999C3.87334 9.48177 4.01917 9.33594 4.0374 9.0625V8.1875C4.01917 7.91406 3.87334 7.76823 3.5999 7.75H2.7249C2.45146 7.76823 2.30563 7.91406 2.2874 8.1875V9.0625ZM5.7874 9.0625C5.80563 9.33594 5.95146 9.48177 6.2249 9.5H7.0999C7.37334 9.48177 7.51917 9.33594 7.5374 9.0625V8.1875C7.51917 7.91406 7.37334 7.76823 7.0999 7.75H6.2249C5.95146 7.76823 5.80563 7.91406 5.7874 8.1875V9.0625ZM9.7249 7.75C9.45146 7.76823 9.30563 7.91406 9.2874 8.1875V9.0625C9.30563 9.33594 9.45146 9.48177 9.7249 9.5H10.5999C10.8733 9.48177 11.0192 9.33594 11.0374 9.0625V8.1875C11.0192 7.91406 10.8733 7.76823 10.5999 7.75H9.7249ZM2.2874 12.5625C2.30563 12.8359 2.45146 12.9818 2.7249 13H3.5999C3.87334 12.9818 4.01917 12.8359 4.0374 12.5625V11.6875C4.01917 11.4141 3.87334 11.2682 3.5999 11.25H2.7249C2.45146 11.2682 2.30563 11.4141 2.2874 11.6875V12.5625ZM6.2249 11.25C5.95146 11.2682 5.80563 11.4141 5.7874 11.6875V12.5625C5.80563 12.8359 5.95146 12.9818 6.2249 13H7.0999C7.37334 12.9818 7.51917 12.8359 7.5374 12.5625V11.6875C7.51917 11.4141 7.37334 11.2682 7.0999 11.25H6.2249ZM9.2874 12.5625C9.30563 12.8359 9.45146 12.9818 9.7249 13H10.5999C10.8733 12.9818 11.0192 12.8359 11.0374 12.5625V11.6875C11.0192 11.4141 10.8733 11.2682 10.5999 11.25H9.7249C9.45146 11.2682 9.30563 11.4141 9.2874 11.6875V12.5625Z" fill="white"/>
                              </svg>
                       
                              12 May, 2024
                            </p>
                            <h3 className="cs_white_color cs_fs_18 cs_medium mb-0">
                            <Link to="/blog/blog-details">Outdoor and Landscape Lighting</Link>
                            </h3>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="cs_recent_post">
                          <Link to="/blog/blog-details" className="cs_recent_post_thumb">
                            <img src="/assets/img/recent_post_2.jpg" alt="" />
                          </Link>
                          <div className="cs_recent_post_right">
                            <p className="cs_recent_posted_by cs_fs_14">
                            <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.9124 1.625V2.5H8.4124V1.625C8.4124 1.36979 8.49443 1.16016 8.65849 0.996094C8.82255 0.832031 9.03219 0.75 9.2874 0.75C9.54261 0.75 9.75224 0.832031 9.9163 0.996094C10.0804 1.16016 10.1624 1.36979 10.1624 1.625V2.5H11.4749C11.8395 2.51823 12.1494 2.64583 12.4046 2.88281C12.6416 3.13802 12.7692 3.44792 12.7874 3.8125V5.125H0.537398V3.8125C0.555627 3.44792 0.683231 3.13802 0.92021 2.88281C1.17542 2.64583 1.48531 2.51823 1.8499 2.5H3.1624V1.625C3.1624 1.36979 3.24443 1.16016 3.40849 0.996094C3.57255 0.832031 3.78219 0.75 4.0374 0.75C4.29261 0.75 4.50224 0.832031 4.6663 0.996094C4.83037 1.16016 4.9124 1.36979 4.9124 1.625ZM0.537398 6H12.7874V13.4375C12.7692 13.8021 12.6416 14.112 12.4046 14.3672C12.1494 14.6042 11.8395 14.7318 11.4749 14.75H1.8499C1.48531 14.7318 1.17542 14.6042 0.92021 14.3672C0.683231 14.112 0.555627 13.8021 0.537398 13.4375V6ZM2.2874 9.0625C2.30563 9.33594 2.45146 9.48177 2.7249 9.5H3.5999C3.87334 9.48177 4.01917 9.33594 4.0374 9.0625V8.1875C4.01917 7.91406 3.87334 7.76823 3.5999 7.75H2.7249C2.45146 7.76823 2.30563 7.91406 2.2874 8.1875V9.0625ZM5.7874 9.0625C5.80563 9.33594 5.95146 9.48177 6.2249 9.5H7.0999C7.37334 9.48177 7.51917 9.33594 7.5374 9.0625V8.1875C7.51917 7.91406 7.37334 7.76823 7.0999 7.75H6.2249C5.95146 7.76823 5.80563 7.91406 5.7874 8.1875V9.0625ZM9.7249 7.75C9.45146 7.76823 9.30563 7.91406 9.2874 8.1875V9.0625C9.30563 9.33594 9.45146 9.48177 9.7249 9.5H10.5999C10.8733 9.48177 11.0192 9.33594 11.0374 9.0625V8.1875C11.0192 7.91406 10.8733 7.76823 10.5999 7.75H9.7249ZM2.2874 12.5625C2.30563 12.8359 2.45146 12.9818 2.7249 13H3.5999C3.87334 12.9818 4.01917 12.8359 4.0374 12.5625V11.6875C4.01917 11.4141 3.87334 11.2682 3.5999 11.25H2.7249C2.45146 11.2682 2.30563 11.4141 2.2874 11.6875V12.5625ZM6.2249 11.25C5.95146 11.2682 5.80563 11.4141 5.7874 11.6875V12.5625C5.80563 12.8359 5.95146 12.9818 6.2249 13H7.0999C7.37334 12.9818 7.51917 12.8359 7.5374 12.5625V11.6875C7.51917 11.4141 7.37334 11.2682 7.0999 11.25H6.2249ZM9.2874 12.5625C9.30563 12.8359 9.45146 12.9818 9.7249 13H10.5999C10.8733 12.9818 11.0192 12.8359 11.0374 12.5625V11.6875C11.0192 11.4141 10.8733 11.2682 10.5999 11.25H9.7249C9.45146 11.2682 9.30563 11.4141 9.2874 11.6875V12.5625Z" fill="white"/>
                                </svg>
                              10 May, 2024
                            </p>
                            <h3 className="cs_white_color cs_fs_18 cs_medium mb-0">
                            <Link to="/blog/blog-details">Panel Upgrades and Maintenance</Link>
                            </h3>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs_footer_bottom cs_accent_bg cs_white_color">
            <div className="container">
              <div className="cs_footer_bottom_in">
                <div className="cs_footer_copyright">Copyright@ {new Date().getFullYear()} <Link to="/">ArkdinAir</Link>. All Rights Reserved.</div>
                <ul className="cs_footer_menu cs_mp_0">
                  <li><a href="#">Setting & Privacy </a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
    );
};

export default Footer;