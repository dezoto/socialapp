import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../redux/actions/authAction";
import "./_loginScreen.scss";

function LoginScreen() {
  const token = useSelector((state) => state.auth);
  const { accessToken } = token;
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login());
  };
  const history = useHistory();
  useEffect(() => {
    if (accessToken) {
      history.push("/");
    }
  }, [history, accessToken]);
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1280px-YouTube_full-color_icon_%282017%29.svg.png"
          alt="youtube logo"
        />
        <button onClick={handleLogin}>Login with Google</button>
        <p>This project is made using Youtube data API</p>
      </div>
    </div>
  );
}

export default LoginScreen;
