import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer/Footer";

const Main = () => {
    return (
        <div className="main-area">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;