import React from "react";
import "./_loginScreen.scss";

function LoginScreen() {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png"
          alt="youtube logo"
        />
        <button>Login with Google</button>
        <p>This project is made using Youtube data API</p>
      </div>
    </div>
  );
}

export default LoginScreen;
