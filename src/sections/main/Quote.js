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

class Quote extends Component {
    render() {
        return (
            <section className="quote d-flex align-items-center">

                <Carousel id='quoteCarousel'/>

                <div className="container text-center d-flex flex-column align-items-center">

                    <blockquote className="quote-content">
                        Thereby, the whale commanders are enabled to recognise each
                        other upon the ocean, even at considerable distances and with
                        no small facility.
                    </blockquote>

                    <cite className="quote-author">
                        Moby-Dick, Herman Melville
                    </cite>

                </div>

            </section>
        );
    }
}

export default Quote;