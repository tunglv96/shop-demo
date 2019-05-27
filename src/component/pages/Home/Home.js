import React, { Component } from 'react';
// import Navbar from '../../layout/header/Navbar';
import Breadcrumbs from '../../layout/content/Breadcrumbs';
import Title_header_content from '../../layout/content/Title-header-content';
import Search from '../../layout/content/Search';
import Home_content from './Home-content';
import Home_footer from './Home-footer';
import { Row } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <Breadcrumbs />
                    <div>
                        <Row>
                            <Title_header_content />
                            <Search />
                        </Row>
                    </div>
                </header>
                <div>
                    <Home_content />
                    <Home_footer />
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
