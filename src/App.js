import React from 'react';
import Guitars from './views/Guitars'
import Basses from './views/Basses'
import Header from './components/Header'
import Footer from './components/Footer'
import { HashRouter, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header />
        <Route exact path="/" component={Guitars} />
        <Route path="/bass-guitars" component={Basses} />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
