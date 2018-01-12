import FixedHeader from './FixedHeader';

import Footer from './Footer';

import React, { Component } from 'react';

class MainLayout extends Component {
    render() {
        return (
            <div>
                <FixedHeader pathName={this.props.location.pathname}/>

                {this.props.children}

                <Footer />
            </div>
        )
    }
}

export default MainLayout;