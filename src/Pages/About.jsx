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
                Title="Smart Electricals for Elegant Spaces"
                Content="At Parth Metal Corporation (PMC), we are proud to be a Kurukshetra, Haryana-based leader in the manufacturing of high-quality electrical accessories that are Made in India and designed to elevate both residential and commercial spaces. We at PMC, envision to deliver innovative solutions that combine advanced technology, aesthetic appeal, and lasting durability while supporting India’s local economy.Our products stand out for their superior craftsmanship, offering a perfect balance of elegance and functionality. Fromshock-proof designs to sustainable, rust-resistant solutions, we ensure every product meets the highest standards of safety,reliability, and performance. At PMC, quality is the foundation of everything we do. Using premium raw materials andcutting-edge technology, we create electrical accessories that are built to last and enhance every space they illuminate. Ourunwavering commitment to excellence ensures that each product we deliver is not just functional but also a testament to enduringdesign, supporting both modern and traditional projects across India and beyond."
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