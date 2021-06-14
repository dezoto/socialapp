import { Container } from "react-bootstrap";
import "./_app.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/HomeScreen";
import { useEffect, useState } from "react";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import WatchScreen from "./screens/watchScreen/WatchScreen";
import SearchScreen from "./screens/SearchScreen";
import SubscriptionsScreen from "./screens/subscriptionsScreen/SubscriptionsScreen";
import ChannelScreen from "./screens/channelScreen/ChannelScreen";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const token = useSelector((state) => state.auth);
  const { accessToken, loading } = token;
  const history = useHistory();
  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("/auth");
    }
  }, [loading, accessToken, history]);
  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>
      <Route path="/auth">
        <LoginScreen />
      </Route>
      <Route path="/search/:query">
        <Layout>
          <SearchScreen />
        </Layout>
      </Route>
      <Route path="/watch/:id">
        <Layout>
          <WatchScreen />
        </Layout>
      </Route>
      <Route path="/feed/subscriptions">
        <Layout>
          <SubscriptionsScreen/>
        </Layout>
      </Route>
      <Route path="/channel/:channelId">
        <Layout>
          <ChannelScreen />
        </Layout>
      </Route>
      
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
