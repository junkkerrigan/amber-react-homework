import Welcome from '../Welcome';

import Steal from "../Steal";

import Works from "../Works";

import Amber from "../Amber";

import Features from "../Features";

import Quote from "../Quote";

import Blog from "../Blog";

import Progress from "../Progress";

import Team from "../Team";

import React, { Component } from 'react';

class MainPage extends Component {
    render() {
        return (
            <div className='inside'>

                <Welcome />

                <Steal />

                <Works />

                <Amber />

                <Features />

                <Quote />

                <Blog />

                <Progress />

                <Team />

            </div>
        );
    }
}

export default MainPage;