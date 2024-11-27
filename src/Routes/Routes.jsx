import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
// import Services from "../Pages/Services";
// import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import Products from "../Pages/Products";
import TeamDetails from "../Components/TeamDetails/ProductDetails";
import Project from "../Pages/Project";
import ProjectDetails from "../Components/ProjectDetails/ProjectDetails";


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
          // {
          //   path: "/service",
          //   element: <Services></Services>,
          // }, 
          // {
          //   path: "/service/service-details",
          //   element: <ServiceDetails></ServiceDetails>,
          // }, 
          {
            path: "/team",
            element: <Products></Products>,
          },  
          {
            path: "/team/team-details/:id", // Dynamic route
            element: <TeamDetails />,
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
            path: "/contact",
            element: <Contact></Contact>,
          },                            
      ],
    },
    // {
    //   path: 'home2',
    //   element: <Layout2></Layout2>,
    //   children: [
    //     {
    //       index: true,
    //       element: <Home2></Home2>,
    //     },                           
    //   ],
    // },

  ]);