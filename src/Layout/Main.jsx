import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Main = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page on route change
    }, [pathname]);

    return (
        <div className="main-area">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;
