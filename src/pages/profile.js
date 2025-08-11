import { Route } from "react-router-dom";
import Navbar from '../components/profile/Nav';
import Footer from "../components/profile/Footer";
import Main from '../components/profile/main';

function Profile() {
    return(
        <>
            <Navbar/>
            <Main/>
            <Footer/>
        </>
    );
}
export default Profile;