import React, { useRef } from 'react';
import MenuIcon from "../assets/icon/MenuIcon";
import CloseIcon from "../assets/icon/CloseIcon";
import TelegramImg from "/images/telegram.png";
import InstagramImg from "/images/instagram.png";

function Header() {

  const MenuBtnRef = useRef(document.querySelector(".header-menu"));

  const openMenu = () => {
    MenuBtnRef.current.classList.add("active");
  }

  const closeMenu = () => {
    MenuBtnRef.current.classList.remove("active");
  }

  return (
    <header className="header">
      <div className="cantainer">
        <div className="header-wrap">
          <a href='/' className='header-logo'>Modix</a>
          <nav className="header-nav">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Project</a>
            <a href="#">Contact</a>
          </nav>
          <button className="header-menu-btn" onClick={openMenu}>
            <MenuIcon />
          </button>
          <div className="header-menu" ref={MenuBtnRef}>
            <button className="header-menu-close" onClick={closeMenu}>
              <CloseIcon />
            </button>
            <nav className="header-menu-nav">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Project</a>
              <a href="#">Contact</a>
            </nav>
            <div className="header-menu-nav-net">
              <button className="header-menu-nav-img">
                <a href="https://t.me/+67QXRyWUaEJjMmMy">
                  <img src={TelegramImg} alt="telegram" />
                </a>
              </button>
              <button className="header-menu-nav-img">
                <a href="https://instagram.com/modix.team">
                  <img src={InstagramImg} alt="instagram" />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header