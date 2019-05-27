import React, { Component } from 'react';
import Home from './component/pages/Home/Home';
import Posters from './component/pages/posters/Posters';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'reactstrap';
import Nav_bar from './component/layout/header/Navbar';
import Login from './component/pages/login/Login';
import Posters_product from './component/pages/posters/posters-product/Posters_product';


class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Container>
          <Router>
            <div>
              <Nav_bar />
              <Route path="/Login" exact component={Login} />
              <Route path="/" exact component={ Home} />
              <Route path="/Posters/" exact component={Posters} />
              <Route path="/Posters_product" exact component={Posters_product} />
            </div>
          </Router>
        </Container>
      </React.Fragment>

    );
  }
}

export default App;