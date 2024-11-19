import About2 from "../Components/About/About2";
import BreadCumb from "../Components/Common/BreadCumb";
// import Faq from "../Components/Home/Faq";
// import Process from "../Components/Home/Process";
import Testimonial from "../Components/Home/Testimonial";

const About = () => {
    return (
        <div className="about-area">
            <BreadCumb Title="About Us"></BreadCumb>
            <About2 
                Img="/assets/img/about_img_2.png"
                TitleUp="About us"
                Title="Turning up the chill factor in your home or office"
                Content="PMC delivers electrical accessories that stand out for their quality and design. Our range is built for those who want the best in both aesthetics and durability, giving every space the illumination it deserves.As one of the leading brands in the manufacturing of high-quality electrical accesories, we take pride in delivering solutions that meet the needs of both residential and commercial construction.
"
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
            
           
        </div>
    );
};

export default About;