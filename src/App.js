import logo from './logo.svg';
import './App.css';
import Container from './Components/Container/Container';
import Navbar from './Components/Navbar/Navbar';
import Undernav from './Components/Undernav/Undernav';
import Banner from './Components/Banner2/Banner';
// import Banner from './Components/Banner2/Banner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Undernav />
      <Container />
      <Banner />
    </div>
  );
}

export default App;
