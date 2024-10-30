import About2 from "../Components/About/About2";
import Blog2 from "../Components/Home2/Blog2";
import Choose2 from "../Components/Home2/Choose2";
import Contact2 from "../Components/Home2/Contact2";
import HomeSlider2 from "../Components/Home2/HomeSlider2";
import Project2 from "../Components/Home2/Project2";
import Services2 from "../Components/Home2/Services2";
import Team from "../Components/Home2/Team";
import Testimonial3 from "../Components/Home2/Testimonial3";
import Cta from "../Components/Services/Cta";

const Home2 = () => {
    return (
        <div>
            <HomeSlider2></HomeSlider2>
            <About2 
                Img="/assets/img/about_img_2.png"
                TitleUp="About us"
                Title="Turning up the chill factor in your home or office"
                Content="This involves setting up a new air conditioning system in your home or office. It's crucial to ensure that the unit is properly sized for the space and installed correctly for optimal efficiency"
                FeatureList={[
                    "Ventilation System Maintenance",
                    "Indoor Air Quality Testing",
                    "Cool Craft Custom Solutions"
                ]}
                Experience="25+"
                BioImg="/assets/img/avatar_1.png"                
                BioName="Roberto Ramon"                
                BioContent="Call any time for services"                
            ></About2>
            <Services2></Services2>
            <Choose2></Choose2>
            <Cta></Cta>
            <Team></Team>
            <Contact2></Contact2>
            <Project2></Project2>
            <Testimonial3></Testimonial3>
            <Blog2></Blog2>
        </div>
    );
};

export default Home2;