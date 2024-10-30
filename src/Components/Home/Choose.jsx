import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import data from "../../Data/choose.json";
import SectionTitle from "../Common/SectionTitle";

const Choose = () => {

    useEffect(() => {
        loadBackgroudImages();
      }, []);
      
    return (
        <section className="cs_why_chose_us cs_style_1 cs_bg_filed overflow-hidden" data-background="/assets/img/why_chose_us_bg_1.jpg">
          <div className="cs_height_115 cs_height_lg_70"></div>
          <div className="container wow fadeInRight" data-wow-duration="0.9s" data-wow-delay="0.25s">
            <div className="cs_why_chose_us_in">
              <div className="cs_section_heading cs_style_1">
              <SectionTitle
                  Title="Relax we ve got your air climate covered"
                  SubTitle="Why Choose Us"
              ></SectionTitle>
              </div>
              <div className="cs_height_45 cs_height_lg_45"></div>
              <div className="row cs_gap_y_30 cs_row_gap_60">
              {data.map((item, i) => (
                <div key={i} className="col-sm-6">
                  <div className="cs_iconbox cs_style_1">
                    <div className="cs_iconbox_icon cs_mb_17">
                      <img src={item.img} alt="Icon" />
                    </div>
                    <h3 className="cs_iconbox_title cs_fs_24 cs_semibold cs_mb_6">{item.title}</h3>
                    <p className="cs_iconbox_subtitle mb-0">{item.desc}</p>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
          <div className="cs_height_115 cs_height_lg_70"></div>
        </section>
        
    );
};

export default Choose;