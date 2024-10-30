import { Link } from "react-router-dom";

const PricingCard = ({Price,Monthly,Title,FeatureList}) => {
    return (
        <div className="cs_pricing_plan cs_style_1">
        <img src="/assets/img/shapes/price_shape.svg" alt="" className="cs_pricing_shape" />
        <div className="cs_pricing_plan_head">
          <div className="cs_price">
            <div className="cs_price_in">
              <h3 className="cs_fs_36 cs_white_color cs_semibold"><span>$</span>{Price}</h3>
              <p className="cs_fs_18 cs_medium cs_white_color">{Monthly}</p>
            </div>
            <svg width="120" height="94" viewBox="0 0 120 94" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0H110L120 15H0L10 0Z" fill="#010F34"/>
              <path d="M13 0H106V79L59.5 94L13 79V0Z" fill="#FF5500"/>
            </svg>       
          </div>
          <h2 className="cs_pricing_plan_heading mb-0 cs_fs_20 cs_medium">{Title}</h2>
        </div>
        <ul className="cs_pricing_features cs_mp_0 cs_heading_color">
        {FeatureList?.map((item, index) => (
          <li key={index}><img src="assets/img/icons/tick.svg" alt="" />{item} </li>
        ))}
        </ul>
        <Link to="/contact" className="cs_btn cs_style_1 cs_type_1">
            <span>Choose Plan</span> 
        </Link>
      </div>
    );
};

export default PricingCard;