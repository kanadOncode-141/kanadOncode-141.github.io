import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import ContactBox from '../Components/ContactBox'


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading = "Contact" text ="To contact with me fill the form below"/>
      <ContactBox/>
      <Footer/>
    </div>
  )
}

export default Contact