import React, { Component } from 'react';
import Header from './component/header/Navbar';
import Breadcrumbs from './component/header/Breadcrumbs';
import Header_shop from './component/header/Header-shop';
import Dropdown_content from './component/product/Dropdown-content';
import Slowing from './component/product/Showing';
import Product from './component/product/Product';
import img1 from './images/img1.jpg';
import Pagination_pro from './component/product/Pagination-pro';
import { Container, Row, Col } from 'reactstrap';



class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Container>
          <header>
            <Header />
            <Breadcrumbs />
            <Header_shop />
          </header>
          <section>
            <Row>
              <Col xs="6">
                <Slowing />
              </Col>
              <Col xs="6">
                <Dropdown_content />
              </Col>
            </Row>
          </section>
          <section>
            <Row>
              <Product
                name= "Flying Ninja"
                price= "$12.00"
                images = {img1}
              />
              <Product
                name= "Flying Ninja"
                price= "$16.00"
                images = {img1}
              />
              <Product
                name= "Flying Ninja"
                price= "$12.00"
                images = {img1}
              />
              <Product
                name= "Flying Ninja"
                price= "$17.00"
                images = {img1}
              />
              <Product
                name= "Flying Ninja"
                price= "$19.00"
                images = {img1}
              />
              <Product
                name= "Flying Ninja"
                price= "$12.00"
                images = {img1}
              />
              <Product
                name= "Flying Ninja"
                price= "$11.00"
                images = {img1}
              />
              <Product
                name= "Flying Ninja"
                price= "$15.00"
                images = {img1}
              />
            </Row>
          </section>
          <Pagination_pro />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
