import { useEffect } from "react";
import Form4 from "../Form/Form4";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Contact2 = () => {

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const ImageArea = {
    BgImg:'/assets/img/get_a_quote_bg.jpg',
    MainImage:'/assets/img/get_a_quote_img.jpg'
  }

    return (
        <section className="cs_get_quote cs_bg_filed" data-background={ImageArea.BgImg}>
        <div className="cs_height_120 cs_height_lg_80"></div>
        <div className="container">
          <div className="row align-items-center cs_gap_y_40">
            <div className="col-xl-5 col-lg-6 wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay="0.25s">
              <div className="cs_get_quote_thumb">
                <img src={ImageArea.MainImage} alt="image" />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
                <Form4
                    Title="Get in touch with us"
                    SubTitle="Get a quote"
                ></Form4>
            </div>
          </div>
        </div>
        <div className="cs_height_120 cs_height_lg_80"></div>
      </section>
    );
};

export default Contact2;