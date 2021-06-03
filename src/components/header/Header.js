import React from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps, MdVideocam } from "react-icons/md";

function Header({handleToggleSidebar}) {
  return (
    <div className="border border-dark header">
      <FaBars className="header__menu" size={26} onClick={() => handleToggleSidebar()}/>
      <img
        src="https://www.thebf.org/Theme/BootstrapTBF2018/assets/img/yt_logo_mono_dark.png"
        alt="youtube logo"
        className="header__logo"
      />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdVideocam size={28}/>
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
          alt="user"
        />
      </div>
    </div>
  );
}

export default Header;
