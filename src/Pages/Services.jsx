import BreadCumb from "../Components/Common/BreadCumb";
import Pricing from "../Components/Home/Pricing";
import Cta from "../Components/Services/Cta";
import Services2 from "../Components/Services/Services2";


const Services = () => {
    return (
        <div className="service-area">
            <BreadCumb Title="Services"></BreadCumb>
            <Services2></Services2>
            <Cta></Cta>
            <Pricing></Pricing>
        </div>
    );
};

export default Services;