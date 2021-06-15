import React, { useState } from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps, MdVideocam } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { useSelector } from "react-redux";

function Header({ handleToggleSidebar }) {
  const [input, setInput] = useState('');
  const history = useHistory();
  const {photoURL} = useSelector(state => state.auth?.user)
  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/search/${input}`)
  }
  return (
    <div className="border border-dark header">
      <div className="header__left">
        <FaBars
          className="header__menu"
          size={26}
          onClick={() => handleToggleSidebar()}
        />
        <Link to="/">
          <img
            src="https://www.thebf.org/Theme/BootstrapTBF2018/assets/img/yt_logo_mono_dark.png"
            alt="youtube logo"
            className="header__logo"
          />
        </Link>
      </div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Search" value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className='buttonCaption4' type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <IconButton className="iconButton buttonCaption1">
          <MdVideocam className="header__icon" size={25} />
        </IconButton>
        <IconButton className="iconButton buttonCaption2">
          <MdApps className="header__icon" size={25} />
        </IconButton>
        <IconButton className="iconButton buttonCaption3">
          <MdNotifications className="header__icon" size={25} />
        </IconButton>
        <img
          className="header__icon"
          src={photoURL}
          alt="userImage"
        />
      </div>
    </div>
  );
}

export default Header;
