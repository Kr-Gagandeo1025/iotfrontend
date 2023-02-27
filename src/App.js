import './App.css';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import MainScreen from './components/MainScreen';
import Services from './components/Servicecs';
import Whyus from './components/Whyus';
import Cousrel1 from './components/Cousrel1';
import Carousal2 from './components/Carousal2';
import Companies from './components/Companies';
import Footer from './components/Footer';
import SearchPopup from './components/SearchPopup';

function App() {
  return (
    <div className="App">
        <SearchPopup trigger={false}/>
        <Socials/>
        <Navbar/>
        <MainScreen/>
        <Services/>
        <Whyus/>
        <Cousrel1/>
        <Carousal2/>
        <Companies/>
        <Footer/>
    </div>
  );
}

export default App;
