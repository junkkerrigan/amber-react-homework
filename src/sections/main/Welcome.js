import React, { Component } from 'react';

import bg1 from '../../img/bg-1.jpg';

import bg2 from '../../img/bg-2.jpg';

import bg3 from '../../img/bg-3.jpg';

import bg4 from '../../img/bg-4.jpg';

import bg5 from '../../img/bg-5.jpg';

import Carousel from './Carousel';

class Welcome extends Component {

    render() {

        const images=[bg1, bg2, bg3, bg4, bg5];
        return (
            <section id="home" className="welcome d-flex align-items-center text-center">

                <Carousel slidesNum={5} id='welcomeCarousel' imgDir={images}/>

                <div className="container d-flex flex-column align-items-center">

                    <h2 className="welcome-title">Creating a unique look</h2>
                    <h2 className="welcome-title sub">Never been easier</h2>

                    <div className="d-flex">

                        <a href="#" className="btn btn-outline-primary welcome-button">see features</a>
                        <a href="#" className="btn btn-outline-primary welcome-button">purchase now</a>

                    </div>

                </div>

            </section>
        );
    }
}


export default Welcome;


/*
class Welcome extends Component {
    render() {
        return (

        );
    }
}
 */