
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li className="">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>
          About
        </Link>
      </li>
      
      <li className="">
        <Link to="/team">Our Products</Link>
        {/* <DropDown>
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
        </DropDown> */}
      </li>
     
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
