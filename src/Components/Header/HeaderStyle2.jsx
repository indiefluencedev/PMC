import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
export default function HeaderStyle2({ variant }) {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky('cs-gescout_sticky'); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);
  return (
    <header
      className={`cs_site_header header_style_2 cs_style_1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >
      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <Link className="cs_site_branding" to="/">
                <img src="/assets/img/logo.svg" alt="Logo" />
              </Link>
              <div className="cs_nav cs_primary_font fw-medium">
                <span
                  className={
                    mobileToggle
                      ? 'cs-munu_toggle cs_teggle_active'
                      : 'cs-munu_toggle'
                  }
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </span>
                <Nav />
              </div>
            </div>
            <div className="cs_main_header_right">
            <div className="cs_header_social_links">
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
              <Link to="/contact" className="cs_btn cs_style_1 cs_color_1">
                <span>Request a quote</span>              
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
