import React from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps, MdVideocam } from "react-icons/md";
import { useSelector } from "react-redux";

function Header({ handleToggleSidebar }) {
const profile = useSelector(state => state.auth)
const {user} = profile
  return (
    <div className="border border-dark header">
      <div className="header__left">
        <FaBars
          className="header__menu"
          size={26}
          onClick={() => handleToggleSidebar()}
        />
        <img
          src="https://www.thebf.org/Theme/BootstrapTBF2018/assets/img/yt_logo_mono_dark.png"
          alt="youtube logo"
          className="header__logo"
        />
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
        <img className="header__icon" src={user.photoURL} alt="userImage" />
      </div>
    </div>
  );
}

export default Header;
