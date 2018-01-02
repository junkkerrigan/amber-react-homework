import React, { Component } from 'react';

import bg1 from '../../img/bg-1.jpg';

import bg2 from '../../img/bg-2.jpg';

import bg3 from '../../img/bg-3.jpg';

import bg4 from '../../img/bg-4.jpg';

import bg5 from '../../img/bg-5.jpg';

class Carousel extends Component {
    render() {
        return (
            <div id={this.props.id} className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target={`#${this.props.id}`} data-slide-to="0" className="active"></li>
                    <li data-target={`#${this.props.id}`} data-slide-to="1"></li>
                    <li data-target={`#${this.props.id}`} data-slide-to="2"></li>
                    <li data-target={`#${this.props.id}`} data-slide-to="3"></li>
                    <li data-target={`#${this.props.id}`} data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={bg1} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={bg2} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={bg3} alt="Third slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={bg4} alt="Fourth slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={bg5} alt="Fifth slide"/>
                    </div>
                </div>
            </div>
        );
    }
}

/*class Title extends Component {
    render() {
        return (
            <h2 className={this.props.cls}>{this.props.txt}</h2>
        );
    }
}

class Link extends Component {
    render() {
        return (
            <a href="#" className="btn btn-outline-primary welcome-button">{this.props.txt}</a>
        );
    }
}*/

class Welcome extends Component {
    render() {
        return (
            <section id="home" className="welcome d-flex align-items-center text-center">

                <Carousel id='welcomeCarousel'/>

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