import React from 'react'
import CardSection from './cardsec/CardSection';
import Footer from '../../component/Footer/Footer';
import Navbar from '../../component/Navbar/Navbar';

const StaticEvents = ({type}) => {

  return (
    <div><Navbar />
    <CardSection type={type}/>
    <Footer /></div>
  )
}

export default StaticEvents