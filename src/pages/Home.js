
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SearchForm from '../components/SearchForm';
import Categories from '../components/Categories';
import MostWantedBrands from '../components/MostWantedBrands';
import TodaysOffers from '../components/TodaysOffers';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import SplashScreen from '../components/SplashScreen';
import '../styles/Home.css';

function Home() {
  return (
    <>
      <SplashScreen />
      <div className="home-container">
        <Navbar />
        <Hero />
        <SearchForm />
        <Categories />
        <MostWantedBrands />
        <TodaysOffers />
        <WhyChooseUs />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default Home;