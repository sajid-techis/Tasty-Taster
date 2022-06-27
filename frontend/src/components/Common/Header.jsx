import React from "react";
import logo from "../../assets/img/logo.svg";
import Mainbanner from '../../assets/img/background.png';


const Header = () => {
  return (
    <>
      <header>
        <img src={Mainbanner} alt="" />
      </header>
      <section className="logo">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </section>
      <section className="text">
        <p>
          To eat is a necessity, <br />
          <span>BUT TO EAT</span> <br />
          intelligently is an art.
        </p>
      </section>
    </>
  );
};

export default Header;
