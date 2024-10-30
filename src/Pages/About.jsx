import About2 from "../Components/About/About2";
import BreadCumb from "../Components/Common/BreadCumb";
import Faq from "../Components/Home/Faq";
import Process from "../Components/Home/Process";
import Testimonial from "../Components/Home/Testimonial";

const About = () => {
    return (
        <div className="about-area">
            <BreadCumb Title="About Us"></BreadCumb>
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
            <Testimonial></Testimonial>
            <Faq></Faq>
            <Process></Process>
        </div>
    );
};

export default About;