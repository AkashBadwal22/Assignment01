import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

import Home from '../container/home/home';
import About from '../container/about/about';
import Contact from '../container/contact/contact';

const AppRouter =()=> (
  <Router>
    <Header />
    <Switch>
      <div className="main-container">
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      </div>
    </Switch>
    <Footer />
  </Router>
)

export default AppRouter