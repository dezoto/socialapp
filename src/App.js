import { Container } from "react-bootstrap";
import "./_app.scss";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import HomeScreen from "./screens/HomeScreen";
import { useState } from "react";
import LoginScreen from "./screens/loginScreen/LoginScreen";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container border border-info">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main border border-warning">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <HomeScreen />
            </Layout>
          </Route>
          <Route path="/auth">
            <LoginScreen />
          </Route>
          <Route path="/search">
            <Layout>
              <h1>Search results</h1>
            </Layout>
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
