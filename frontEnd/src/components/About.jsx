import React from 'react'
import {Link} from "react-router-dom";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';


const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
            <div className="top">
                <h1 className="heading">ABOUT US</h1>
                <p>From Our Kitchen to Your Table</p>
            </div>
            <p className="mid">
            Welcome to Arihant Food, where every meal is prepared with love and the freshest ingredients. Our goal is to bring people together over great food, offering flavors that satisfy your taste buds and warm your heart. Whether it’s a casual meal or a special occasion, we strive to create a welcoming space where you can enjoy delicious dishes and unforgettable moments. Come, experience the joy of dining with us!
            </p>
            <Link to={"/"}>Explore Menu<span><HiOutlineArrowNarrowRight/></span></Link>

        </div>
        <div className="banner">
            <img src="/about.png" alt="about"/>
        </div>
      </div>


    </section>
  )
}

export default About