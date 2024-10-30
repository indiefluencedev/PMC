import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import Team from "../Pages/Team";
import TeamDetails from "../Components/TeamDetails/TeamDetails";
import Project from "../Pages/Project";
import ProjectDetails from "../Components/ProjectDetails/ProjectDetails";
import Blog from "../Pages/Blog";
import BlogDetails from "../Components/BlogDetails/BlogDetails";
import Layout2 from "../Layout/Layout2";
import Home2 from "../Pages/Home2";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
            path: "/about",
            element: <About></About>,
          }, 
          {
            path: "/service",
            element: <Services></Services>,
          }, 
          {
            path: "/service/service-details",
            element: <ServiceDetails></ServiceDetails>,
          }, 
          {
            path: "/team",
            element: <Team></Team>,
          },  
          {
            path: "/team/team-details",
            element: <TeamDetails></TeamDetails>,
          },   
          {
            path: "/project",
            element: <Project></Project>,
          },  
          {
            path: "/project/project-details",
            element: <ProjectDetails></ProjectDetails>,
          },
          {
            path: "/blog",
            element: <Blog></Blog>,
          },  
          {
            path: "/blog/blog-details",
            element: <BlogDetails></BlogDetails>,
          },                                                          
          {
            path: "/contact",
            element: <Contact></Contact>,
          },                            
      ],
    },
    {
      path: 'home2',
      element: <Layout2></Layout2>,
      children: [
        {
          index: true,
          element: <Home2></Home2>,
        },                           
      ],
    },

  ]);