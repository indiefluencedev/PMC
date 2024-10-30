import HeaderStyle2 from '../Components/Header/HeaderStyle2';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Layout2 = () => {
    return (
        <div>
            <HeaderStyle2></HeaderStyle2>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout2;