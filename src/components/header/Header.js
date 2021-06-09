import React from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps, MdVideocam } from "react-icons/md";
import { Link } from "react-router-dom";


function Header({ handleToggleSidebar }) {
  return (
    <div className="border border-dark header">
      <div className="header__left">
        <FaBars
          className="header__menu"
          size={26}
          onClick={() => handleToggleSidebar()}
        />
        <Link to='/'>
        <img
          src="https://www.thebf.org/Theme/BootstrapTBF2018/assets/img/yt_logo_mono_dark.png"
          alt="youtube logo"
          className="header__logo"
        />
        </Link>
      </div>
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdVideocam className="header__icon" size={28} />
        <MdNotifications className="header__icon" size={28} />
        <MdApps className="header__icon" size={28} />
        <img
          className="header__icon"
          src="http://pm1.narvii.com/6387/8256503d4679d3b2ea14d5df4ce2a6bd70d2b3f9_00.jpg"
          alt="userImage"
        />
      </div>
    </div>
  );
}

export default Header;
