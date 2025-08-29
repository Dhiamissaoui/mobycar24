import Navbar from '../components/Profile/Nav';
import Footer from "../components/Profile/Footer";
import Main from '../components/Profile/Main';
import { useState } from 'react';

function Profile() {

    const [slideOut, setSlideOut] = useState(false);

    return(
        <>
            <Navbar onLogoutClick={() => setSlideOut(!slideOut)} />
            <Main slideOut={slideOut} setSlideOut={setSlideOut} />
            <Footer/>
        </>
    );
}
export default Profile;
