import React from 'react';
import './App.scss';
import "bootstrap";
import Landing from "./layout/Landing";
import Products from "./layout/Products"
import NewNav from "./layout/components/NewNav";
import Nav from "./layout/components/Nav";
import Footer from "./layout/components/Footer";
import SingleProduct from './layout/SingleProduct';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ComingSoon from "./layout/ComingSoon";
import About from "./layout/AboutPage";
import ScrollButton from "./layout/components/ScrollTop";
import Contact from "./layout/Contact";
import ReactMap from "./layout/components/single-products/ReactMapbox";
import StartingPoint from "./layout/components/StartingPoint";



function App() {
  return (
    <div className="App">
      <Router>
        <StartingPoint />
        <NewNav />
      <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/single-product" component={SingleProduct} />
          <Route exact path="/soon" component={ComingSoon} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/reactmap" component={ReactMap} />
      </Switch>
      <ScrollButton />
      <Footer />
      </Router>
    </div>
  );
}

export default App;