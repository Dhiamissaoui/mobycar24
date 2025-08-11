import React from "react";
import Nav from '../components/faqs/Navbar';
import Footer from '../components/Footer';
import Faq_page from '../components/faqs/faqPage';



function Faq() {
    return(
        <>
            <Nav/>
            <Faq_page/>
            <Footer/>
        </>
    );
}
export default Faq;