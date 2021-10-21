import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import Works from './components/Works/Works';
import Intro from './components/Intro/Intro';
import './app.scss';


function App() {
  return (
    <div className="app">
      <Header/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
