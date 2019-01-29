import React, { Component } from 'react';
import './App.css';
// import Portfolio from './portolio/Portfolio';
// import About from './about/About';
import Contact from './contact/Contact';
import Landing from './landing/Landing';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Blog from './blog/Blog';



class App extends Component {

  render() {
    return (
        <div className="App">
          <BrowserRouter>
            <div>
              <Header drawerClickHandler={this.drawerClickHandler} />
              <Switch>
                <Route exact path='/' component={Landing} />
                <Route path='/Portfolio' component={Landing} />
                <Route path='/Contact' component={Contact} />
                <Route path='/Blog' component={Blog} />
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
//
// this.setState((prevState) => {
//   return {sideDrawerOpen: !prevState.sideDrawerOpen};
// });
