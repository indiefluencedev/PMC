import data from '../../Data/choose2.json';
import SectionTitle from '../Common/SectionTitle';

const Choose2 = () => {

    const ProjectImage = {
        img:'/assets/img/why_chose_us_img_2.png',
        Projectnumber:'80%',
        ProjectContent:'Success Project',
        Content:'Air conditioning system is best for your home Our FrostFree Consultaservice provides expert guidance'
    }

    return (
        <section className="cs_why_chose_us cs_style_2 cs_bg_filed overflow-hidden">
            <div className="cs_height_115 cs_height_lg_70"></div>
            <div className="container">
                <div className="row cs_gap_y_40">
                <div className="col-xl-7 wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay="0.25s">
                    <div className="cs_why_chose_us_thumb">
                    <img src={ProjectImage.img} alt="" />
                    <div className="cs_success_box text-center">
                        <h3 className="cs_fs_36 cs_white_color cs_semibold mb-0">{ProjectImage.Projectnumber}</h3>
                        <p className="cs_white_color mb-0">{ProjectImage.ProjectContent}</p>
                    </div>
                    </div>
                </div>
                <div className="col-xl-5">
                    <div className="cs_section_heading cs_style_1 cs_type_1">
                        <SectionTitle
                            Title="Your Trusted Air Comfort Experts"
                            SubTitle="Why Choose Us"                       
                        >
                        </SectionTitle>
                    </div>
                    <div className="cs_height_40 cs_height_lg_40"></div>
                    <p className="mb-0">{ProjectImage.Content}</p>
                    <div className="cs_height_45 cs_height_lg_45"></div>
                    <div className="cs_iconbox_2_list">
                    {data.map((item, i) => (    
                    <div key={i} className="cs_iconbox cs_style_2">
                        <div className="cs_iconbox_icon">
                        <img src={item.img} alt="Icon" /> 
                        </div>
                        <div className="cs_iconbox_right">
                        <h3 className="cs_iconbox_title cs_fs_24 cs_semibold cs_mb_10">{item.title}</h3>
                        <p className="cs_iconbox_subtitle mb-0">{item.desc}</p>
                        </div>
                    </div>
                    ))}
                    </div>
                </div>
                </div>
            </div>
            <div className="cs_why_chose_us_img"> 
                <img src="/assets/img/why_chose_us_img_3.svg" alt="" />
            </div>
            <div className="cs_height_120 cs_height_lg_70"></div>
            </section>
    );
};

export default Choose2;