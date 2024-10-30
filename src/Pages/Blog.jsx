import { Link } from "react-router-dom";
import Blog1 from "../Components/Blog/Blog1";
import BreadCumb from "../Components/Common/BreadCumb";
import BlogData from '../Data/blog.json'; 

const Blog = () => {

    const BlogCategory = [
        {title:'BreezeCheck Maintenance', link:'/blog/blog-details'},
        {title:'ChillMax Cleaning', link:'/blog/blog-details'},
        {title:'CoolFlow Inspection', link:'/blog/blog-details'},
        {title:'FrostWave Duct Cleaning', link:'/blog/blog-details'},
        {title:'CoolPro Installation', link:'/blog/blog-details'},
        {title:'RapidRepair Services', link:'/blog/blog-details'},
        {title:'Emergency CoolFix', link:'/blog/blog-details'}
      ];      

      const BlogTag = [
        'Application',
        'Art',
        'Marketing',
        'Repair',
        'Installations',
        'Testing',
        'Ventilation',
        'Residential',
      ];      

    return (
        <div className="blog-page">
            <BreadCumb Title="Blog"></BreadCumb>
            <section>
                <div className="cs_height_120 cs_height_lg_80"></div>
                <div className="container">
                    <div className="row cs_gap_y_60">
                    <div className="col-lg-8">
                        <Blog1></Blog1>
                    </div>
                    <div className="col-lg-4">
                        <div className="cs_right_sidebar">
                        <div className="cs_sidebar_widget cs_color_1">
                            <form action="#" className="cs_search_form">
                            <input type="text" placeholder="Enter Keyword" className="cs_search_input" />
                            <button className="cs_search_submit_btn"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.75 14.7188L11.5625 10.5312C12.4792 9.38542 12.9479 8.04167 12.9688 6.5C12.9271 4.66667 12.2917 3.13542 11.0625 1.90625C9.83333 0.677083 8.30208 0.0416667 6.46875 0C4.63542 0.0416667 3.10417 0.677083 1.875 1.90625C0.666667 3.13542 0.0416667 4.66667 0 6.5C0.0416667 8.33333 0.677083 9.86458 1.90625 11.0938C3.11458 12.3229 4.63542 12.9583 6.46875 13C8.03125 12.9792 9.375 12.5104 10.5 11.5938L14.6875 15.7812C14.875 15.9271 15.0625 16 15.25 16C15.4583 16 15.6354 15.9271 15.7812 15.7812C16.0729 15.4271 16.0625 15.0729 15.75 14.7188ZM1.5 6.5C1.54167 5.08333 2.03125 3.90625 2.96875 2.96875C3.90625 2.03125 5.08333 1.54167 6.5 1.5C7.91667 1.54167 9.09375 2.03125 10.0312 2.96875C10.9688 3.90625 11.4583 5.08333 11.5 6.5C11.4583 7.91667 10.9688 9.09375 10.0312 10.0312C9.09375 10.9688 7.91667 11.4583 6.5 11.5C5.08333 11.4583 3.90625 10.9688 2.96875 10.0312C2.03125 9.09375 1.54167 7.91667 1.5 6.5Z" fill="white"/>
                        </svg></button>
                            </form>
                        </div>
                        <div className="cs_sidebar_widget">
                            <h2 className="cs_sidebar_widget_heading cs_fs_24 cs_semibold">Categories</h2>
                            <ul className="cs_category_widget">
                            {BlogCategory.map((item, i) => (                                
                            <li key={i}>
                                <Link to={item.link}>
                                <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.9062 7.4375L14.9062 13.4375C14.7188 13.7917 14.4062 13.9792 13.9688 14H2C1.4375 13.9792 0.96875 13.7812 0.59375 13.4062C0.21875 13.0312 0.0208333 12.5625 0 12V2C0.0208333 1.4375 0.21875 0.96875 0.59375 0.59375C0.96875 0.21875 1.4375 0.0208333 2 0H5.6875C6.22917 0 6.69792 0.197917 7.09375 0.59375L8.625 2H13C13.5625 2.02083 14.0312 2.21875 14.4062 2.59375C14.7812 2.96875 14.9792 3.4375 15 4V5H13.5V4C13.4792 3.6875 13.3125 3.52083 13 3.5H8L6.03125 1.65625C5.92708 1.55208 5.8125 1.5 5.6875 1.5H2C1.6875 1.52083 1.52083 1.6875 1.5 2V11L3.71875 6.5625C3.90625 6.20833 4.20833 6.02083 4.625 6H17C17.375 6.02083 17.6562 6.17708 17.8438 6.46875C18.0312 6.76042 18.0521 7.08333 17.9062 7.4375Z" fill="#696969"/>
                                </svg>
                                <span>{item.title}</span>
                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.7188 6.71875L8.71875 11.7188C8.51042 11.9062 8.27083 12 8 12C7.72917 12 7.48958 11.9062 7.28125 11.7188C7.09375 11.5104 7 11.2708 7 11C7 10.7292 7.09375 10.4896 7.28125 10.2812L10.5938 7H1C0.708333 7 0.46875 6.90625 0.28125 6.71875C0.09375 6.53125 0 6.29167 0 6C0 5.70833 0.09375 5.46875 0.28125 5.28125C0.46875 5.09375 0.708333 5 1 5H10.5938L7.28125 1.71875C7.09375 1.51042 7 1.27083 7 1C7 0.729167 7.09375 0.489583 7.28125 0.28125C7.48958 0.09375 7.72917 0 8 0C8.27083 0 8.51042 0.09375 8.71875 0.28125L13.7188 5.28125C13.9062 5.48958 14 5.72917 14 6C14 6.27083 13.9062 6.51042 13.7188 6.71875Z" fill="#696969"/>
                                </svg>
                                </Link>
                            </li>
                            ))}
                            </ul>
                        </div>
                        <div className="cs_sidebar_widget">
                            <h2 className="cs_sidebar_widget_heading cs_fs_24 cs_semibold">Recent Posts</h2>
                            <ul className="cs_recent_post_widget">
                                {BlogData.map((item, i) => (
                                    <li key={i}>
                                        <div className="cs_recent_post">
                                         <Link to="/blog/blog-details" className="cs_recent_post_thumb">
                                            <img src={item.img} alt="" />
                                        </Link>   
                                        <div className="cs_recent_post_right">
                                            <h3 className="cs_fs_18 cs_medium mb-0">
                                                <Link to="/blog/blog-details">
                                                    {item.title}
                                                </Link>
                                            </h3>
                                            <p className="cs_recent_posted_by cs_fs_14">
                                            <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.15625 2.5H8.09375V1.40625C8.13021 1.00521 8.34896 0.786458 8.75 0.75C9.15104 0.786458 9.36979 1.00521 9.40625 1.40625V2.5H10.5C10.9922 2.51823 11.4023 2.69141 11.7305 3.01953C12.0586 3.34766 12.2318 3.75781 12.25 4.25V13C12.2318 13.4922 12.0586 13.9023 11.7305 14.2305C11.4023 14.5586 10.9922 14.7318 10.5 14.75H1.75C1.25781 14.7318 0.847656 14.5586 0.519531 14.2305C0.191406 13.9023 0.0182292 13.4922 0 13V4.25C0.0182292 3.75781 0.191406 3.34766 0.519531 3.01953C0.847656 2.69141 1.25781 2.51823 1.75 2.5H2.84375V1.40625C2.88021 1.00521 3.09896 0.786458 3.5 0.75C3.90104 0.786458 4.11979 1.00521 4.15625 1.40625V2.5ZM1.3125 7.53125H3.5V6H1.3125V7.53125ZM1.3125 8.84375V10.5938H3.5V8.84375H1.3125ZM4.8125 8.84375V10.5938H7.4375V8.84375H4.8125ZM8.75 8.84375V10.5938H10.9375V8.84375H8.75ZM10.9375 6H8.75V7.53125H10.9375V6ZM10.9375 11.9062H8.75V13.4375H10.5C10.7734 13.4193 10.9193 13.2734 10.9375 13V11.9062ZM7.4375 11.9062H4.8125V13.4375H7.4375V11.9062ZM3.5 11.9062H1.3125V13C1.33073 13.2734 1.47656 13.4193 1.75 13.4375H3.5V11.9062ZM7.4375 6H4.8125V7.53125H7.4375V6Z" fill="#FF5500"/>
                                                </svg>
                                            12 May, 2024
                                            </p>
                                        </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="cs_sidebar_widget">
                            <h2 className="cs_sidebar_widget_heading cs_fs_24 cs_semibold">Popular Tags</h2>
                            <div className="cs_tags">
                            {BlogTag.map((item, i) => ( 
                               <Link key={i} to="/blog/blog-details">{item}</Link>
                            ))}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="cs_height_120 cs_height_lg_80"></div>
                </section>            
        </div>
    );
};

export default Blog;