import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../../../public/assets/img/svg/logo.svg'; // Importing the logo

export default function Header({ variant }) {
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
    <div className='header-area'>
    <header
      className={`cs_site_header cs_style_1 ${
        variant ? variant : ''
      } cs_sticky_header cs_site_header_full_width ${
        mobileToggle ? 'cs_mobile_toggle_active' : ''
      } ${isSticky ? isSticky : ''}`}
    >
      <div className="cs_top_header">
        <div className="container">
          <div className="cs_top_header_in">
            <div className="cs_top_header_left">
              <ul className="cs_top_nav d-flex flex-wrap align-items-center cs_fs_12 text-white m-0 p-0">
                <li>Welcome to Our ArkdinAir & Services Company</li>
              </ul>
            </div>
            <div className="cs_top_header_right">
              <div className="cs_header_social_links_wrap">
                <p className="mb-0">Follow Us On: </p>
                <div className="cs_header_social_links">
                  {/* Social icons */}
                  <a href="#" className="cs_social_btn cs_center">
                    <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.62891 8.625H5.57812V14.75H2.84375V8.625H0.628906V6.08203H2.84375V4.16797C2.86198 3.05599 3.16276 2.20833 3.74609 1.625C4.34766 1.04167 5.14974 0.75 6.15234 0.75C6.66276 0.75 7.10938 0.777344 7.49219 0.832031C7.89323 0.886719 8.10286 0.914062 8.12109 0.914062V3.07422H7.02734C6.48047 3.09245 6.10677 3.23828 5.90625 3.51172C5.6875 3.76693 5.57812 4.07682 5.57812 4.44141V6.08203H8.01172L7.62891 8.625Z" fill="white"/>
                    </svg>
                  </a>
                  {/* Other social icons */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_main_header cs_accent_bg">
        <div className="container">
          <div className="cs_main_header_in">
            {/* Left side with logo */}
            <div className="cs_main_header_left">
              <Link className="cs_site_branding" to="/">
                <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} /> {/* Logo with imported path */}
              </Link>
            </div>

            {/* Center with navigation */}
            <div className="cs_main_header_center">
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
                <Nav setMobileToggle={setMobileToggle} />
              </div>
            </div>

            {/* Right side with buttons */}
            <div className="cs_main_header_right">
              <div className="cs_toolbox">
                <div className="cs_header_contact">
                  <div className="cs_header_contact_right">
                    <Link to="/contact" className="cs_btn cs_style_1">
                      <span>Read More</span>
                      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.28125 0.71875L13.7812 5.96875C13.9271 6.11458 14 6.29167 14 6.5C14 6.70833 13.9271 6.88542 13.7812 7.03125L8.28125 12.2812C7.90625 12.5729 7.55208 12.5729 7.21875 12.2812C6.92708 11.9062 6.92708 11.5521 7.21875 11.2188L11.375 7.25H0.75C0.291667 7.20833 0.0416667 6.95833 0 6.5C0.0416667 6.04167 0.291667 5.79167 0.75 5.75H11.375L7.21875 1.78125C6.92708 1.44792 6.92708 1.09375 7.21875 0.71875C7.55208 0.427083 7.90625 0.427083 8.28125 0.71875Z" fill="currentColor"></path>
                      </svg>                
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div className="cs_site_header_spacing_130"></div>
    </div>
  );
}
