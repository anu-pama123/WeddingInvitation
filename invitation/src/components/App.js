import './App.css';

import Header from './header/Header';
import About from './about/About';
import CountDown from './countDown/CountDown';
import WhenAndWHere from './whenAndWhere/WhenAndWhere';
import Gallery from './gallery/Gallery';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <CountDown></CountDown>
      <WhenAndWHere></WhenAndWHere>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}

export default App;
