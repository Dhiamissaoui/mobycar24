import Navbar from '../components/Profile/Nav';
import Footer from "../components/Profile/Footer";
import Main from '../components/Profile/Main';
import { useState } from 'react';

function Profile() {

    const [slideOut, setSlideOut] = useState(false);
    const [removeFilter, setremoveFilter] = useState(false);

    return (
        <>
            <Navbar onLogoutClick={() => setSlideOut(!slideOut)}
                setremoveFilter={setremoveFilter} />
            <Main
                slideOut={slideOut}
                setSlideOut={setSlideOut}
                removeFilter={removeFilter}
                setremoveFilter={setremoveFilter}
            />
            <Footer />
        </>
    );
}
export default Profile;
