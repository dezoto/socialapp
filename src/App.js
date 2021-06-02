import { Container } from 'react-bootstrap';
import './_app.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__container border border-info">
        <Sidebar />
        <Container fluid className='app__main border border-warning'>
          <HomeScreen />
        </Container>
      </div>
    </div>
  );
}

export default App;
