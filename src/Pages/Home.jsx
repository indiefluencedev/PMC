import About from "../Components/Home/About";
import Blog from "../Components/Home/Blog";
import Choose from "../Components/Home/Choose";
import Faq from "../Components/Home/Faq";
import HomeSlider from "../Components/Home/HomeSlider";
import Pricing from "../Components/Home/Pricing";
import Process from "../Components/Home/Process";
import Services from "../Components/Home/Services";
import Team from "../Components/Home/Team";
import Testimonial from "../Components/Home/Testimonial";

const Home = () => {
    return (
        <div className="home-area">
            <HomeSlider></HomeSlider>
            <About
                Img="/assets/img/about_img_1.png"
                TitleUp="About us"
                Title="Where every breath feels fresh and cool"
                Content="Prompt diagnosis and repair of any issues with your air conditioning unit your ensure optimal performance Inspection of ductwork for leaks or damage air followed by sealing to improve energy efficiency"
                FeatureList={[
                    "AirFlow Optimization",
                    "PureAir Quality Testing",
                    "FreezeGuard Installation",
                    "Cool Care Maintenance",
                    "ClimateControl Checkup",
                    "ChillOut Emergency Services"
                ]}
                NumberContent="Call any time for Freseir services"
                Number="(+578) 587 89168"
            ></About>
            <Services></Services>
            <Team></Team>
            <Choose></Choose>
            <Pricing></Pricing>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Process></Process>
            <Blog></Blog>
        </div>
    );
};

export default Home;