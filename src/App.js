import React from 'react';
import Guitars from './views/Guitars'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Guitars />
      <Footer />
    </div>
  );
}

export default App;
