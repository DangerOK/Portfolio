import React, { Component } from "react";
import "./App.css";
import Contact from "./components/contact/Contact";
import Landing from "./components/landing/Landing";
import Resume from "./components/resume/Resume";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter basename="/">
          <div>
            <Header drawerClickHandler={this.drawerClickHandler} />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/Portfolio" component={Landing} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Resume" component={Resume} />
            </Switch>
            <Footer />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
