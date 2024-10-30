import data from '../../Data/project.json';
import { Link } from 'react-router-dom';

const Project1 = () => {
    return (
        <section>
            <div className="cs_height_120 cs_height_lg_80"></div>
            <div className="container">
                <div className="row cs_gap_y_30 cs_row_gap_30">
                {data.map((item, i) => (
                <div key={i} className="col-xl-3 col-lg-4 col-sm-6">
                    <div className="cs_project cs_style_1 text-center">
                    <img src={item.img} alt="Project" className="w-100" />
                    <div className="cs_project_info">
                        <div className="cs_project_info_in">
                        <h3 className="cs_fs_24 cs_semibold cs_white_color cs_mb_10">{item.title}</h3>
                        <p className="cs_fs_14 cs_white_color cs_mb_22">{item.desc}</p>
                        <Link to="/project/project-details" className="cs_project_btn cs_center">
                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.6952 5.70203L11.6932 9.69579C11.318 10.1014 10.6615 10.1014 10.2863 9.69579C9.87982 9.32137 9.87982 8.66615 10.2863 8.29173L12.5686 5.98284H1.00049C0.437714 5.98284 0 5.54602 0 4.9844C0 4.39158 0.437714 3.98596 1.00049 3.98596H12.5686L10.2863 1.70827C9.87982 1.33385 9.87982 0.678627 10.2863 0.304212C10.6615 -0.101404 11.318 -0.101404 11.6932 0.304212L15.6952 4.29797C16.1016 4.67239 16.1016 5.32761 15.6952 5.70203Z" fill="currentColor"/>
                            </svg>                        
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
                </div>
            </div>
            <div className="cs_height_120 cs_height_lg_80"></div>
        </section>
    );
};

export default Project1;