import React, { Component } from 'react';
import './App.css';
// import Portfolio from './portfolio/Portfolio';
// import About from './about/About';
import Contact from './contact/Contact';
import Landing from './landing/Landing';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';


class App extends Component { 
  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <div>
              <Header />
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/Contact' component={Contact} />
              </Switch>
              <Footer />
            </div>
          </BrowserRouter>
        </div>

    );
  }
}

export default App;
// <BrowserRouter>
//   </BrowserRouter>
// <Switch>
//   <Route exact path='/' component={Landing} />
//   <Route path='/Portfolio' component={Portfolio} />
//   <Route path='/Workshop' component={Workshop} />
//   <Route path='/About' component={About} />
// </Switch>

// <Header />
// <About />
// <Portfolio />
// <Footer />
