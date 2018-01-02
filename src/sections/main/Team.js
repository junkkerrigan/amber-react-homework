import React, { Component } from 'react';

import teammate1 from '../../img/teammate-1.jpg';
import teammate2 from '../../img/teammate-2.jpg';
import teammate3 from '../../img/teammate-3.jpg';
import teammate4 from '../../img/teammate-4.jpg';

class Slider extends Component {
    render() {
        return (
            <div className="slider">

                <div className="teammate-info">

                    <p className="teammate-info-name">{this.props.name}</p>
                    <p className="teammate-info-position">{this.props.pos}</p>

                </div>

                <p className="team-list-content">
                    {this.props.txt}
                </p>

            </div>
        );
    }
}

class TeamMate extends Component {
    render() {
        return (
            <li className="team-list-item col-12 col-md-6 col-lg-3">

                <div className="team-wrapper">

                    <div className="slider-wrapper">

                        <img src={this.props.imgSrc} width="210" height="279"/>

                            <Slider name={this.props.name} pos={this.props.pos} txt={this.props.txt}/>

                    </div>

                    <a href="#" className="btn btn-outline-primary team-more">
                        profile
                    </a>

                </div>

            </li>
        );
    }
}

class TeamList extends Component {
    render() {
        return (
            <ul className="team-list row">

                <TeamMate name='Manny Delgado' pos='a little boy' txt="Be who you are and say what you feel, because those
                                        who mind don't matter." imgSrc={teammate1}/>

                <TeamMate name='Gloria Pritchett' pos='psychology specialist' txt="Be who you are and say what you feel, because those
                                        who mind don't matter." imgSrc={teammate2}/>

                <TeamMate name='Luke Dunphy' pos='NATO representative' txt="Be who you are and say what you feel, because those
                                        who mind don't matter." imgSrc={teammate3}/>

                <TeamMate name='Mitchell Pritchett' pos='' txt="Be who you are and say what you feel, because those
                                        who mind don't matter." imgSrc={teammate4}/>

            </ul>
        );
    }
}

class Team extends Component {
    render() {
        return (
            <section className="team d-flex align-items-center">

                <div className="container">

                    <h2 className="team-title text-center">Our team</h2>

                    <TeamList/>

                </div>

            </section>
        );
    }
}

export default Team;