import About from "../Components/Home/About";
import Choose from "../Components/Home/Choose";
import HomeSlider from "../Components/Home/HomeSlider";
import Services from "../Components/Home/Services";
import Team from "../Components/Home/Team";
import Testimonial3 from "../Components/Home/Testimonial";

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
            <Choose></Choose>
            <Team></Team>
            <Services></Services>
         
            <Testimonial3></Testimonial3>
          
        </div>
    );
};

export default Home;