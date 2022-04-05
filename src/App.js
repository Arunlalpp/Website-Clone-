import React from 'react'
import About from './Components/About';
import Feature from './Components/Feature';
import Header from './Components/Header';
import aboutimage from './images/Frame 19.png';
import aboutimage1 from './images/download.png';
import Presentation from './Components/Presentation';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Feature />
      <About image={aboutimage} title='Comes with All You Need For Daily Life' button='Get The App'/>
      <Presentation />
      <About image={aboutimage1} title='Download And Get The App' button='Get The App'/>
      <Footer />
    </div>
  );
}

export default App;
