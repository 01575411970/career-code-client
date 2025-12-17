
import { Outlet } from 'react-router';
import NavBar from '../pages/Sharad/NavBar';
import Footer from '../pages/Sharad/Footer';

const RootLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;