import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoWeAre'
import ArihatTeam from '../components/ArihantTeam'
import Reservation from '../components/ForReservatiion'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
    <HeroSection/>
    <About/>
    <Qualities/>
    <Menu/>
    <WhoAreWe/>
    <ArihatTeam/>
    <Reservation/>
    <Footer/>
    </>
  )
}

export default Home