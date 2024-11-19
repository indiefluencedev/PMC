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
                Title="Illuminating spaces with trusted quality "
                Content="Transform everyday environments with PMC's advanced electrical accessories. Where innovation meets design, we deliver reliable, sustainable solutions that enhance your lifestyle and projects."
                FeatureList={[
                    " Innovation",
                    " Reliability",
                    "Technology",
                    "Quality",
                    "Safety ",
                    "Durability"
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