import React from 'react';
import Navbar from '../components/rentCar/Nav';
import Cars from '../components/rentCar/cars';
import Footer from '../components/rentCar/Footer';


function RentCar() {
  return (
    <>
      <Navbar/>
      <Cars/>
      <Footer/>
    </>
  );
}

export default RentCar;