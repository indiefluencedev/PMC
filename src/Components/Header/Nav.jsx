import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="menu-item-has-children">
        <Link to="/">Home</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileToggle(false)}>
                Home V1
              </Link>
            </li>
            <li>
              <Link to="/home2" onClick={() => setMobileToggle(false)}>
                Home V2
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>
          About
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/service/service-details" onClick={() => setMobileToggle(false)}>
                Service Details
              </Link>
            </li>
          </ul>
        </DropDown>

      </li>      
      <li className="menu-item-has-children">
        <Link to="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/team" onClick={() => setMobileToggle(false)}>
                Team
              </Link>
            </li>
            <li>
              <Link to="/team/team-details" onClick={() => setMobileToggle(false)}>
                Team Details
              </Link>
            </li>
            <li>
              <Link to="/project" onClick={() => setMobileToggle(false)}>
                Project
              </Link>
            </li>
            <li>
              <Link to="/project/project-details" onClick={() => setMobileToggle(false)}>
                 Project Details
              </Link>
            </li>            
          </ul>
        </DropDown>
      </li>
      <li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/blog" onClick={() => setMobileToggle(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
