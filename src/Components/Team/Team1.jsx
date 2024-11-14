import { Link } from 'react-router-dom';
import data from '../../Data/team2.json';

const Team1 = () => {
    return (
        <section>
            <div className="cs_height_120 cs_height_lg_80"></div>
            <div className="container">
                <div className="row cs_gap_y_35">
                {data.map((item, i) => (
                <div key={i} className="col-xl-3 col-lg-4 col-sm-6">
                     <Link to="/team/team-details">
                    <div className="cs_team_member cs_style_1 text-center">
                    <div className="cs_team_member_in">
                        <div className="cs_team_member_thumb">
                        <img src={item.image[0]} alt="" />
                       
                        </div>
                        <div className="cs_team_member_info">
                        <h3 className="cs_team_member_name cs_fs_24 cs_semibold cs_mb_4">
                            <Link to="/team/team-details">{item.Category}</Link>
                        </h3>
                        <p className="cs_team_member_designation cs_fs_14 mb-0">{item.Category}</p>
                        </div>
                        <div className="cs_team_member_phone_number cs_fs_18 cs_heading_color">
                        {/* <img src="/assets/img/icons/phone_icon_2.svg" alt="" /> */}
                        <p>KNOW MORE</p>
                        </div>
                    </div>
                    <div className="cs_team_member_shape cs_accent_color">
                        <svg width="300" height="407" viewBox="0 0 300 407" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0 0.498047V407H300V212.548C175.575 177.381 69.7706 101.188 0 0.498047Z" fill="currentColor"/>
                        </svg>                                       
                    </div>
                    </div>
                    </Link>
                </div>
                ))}
                </div>
            </div>
            <div className="cs_height_120 cs_height_lg_80"></div>
            </section>
    );
};

export default Team1;