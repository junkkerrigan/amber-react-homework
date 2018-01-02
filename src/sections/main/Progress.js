import React, { Component } from 'react';

import development from '../../img/development.png';
import results from '../../img/results.png';
import military from '../../img/military.png';

class ProgressItem extends Component {
    render() {
        return (
            <li className={`col-12 col-lg-4 progress-${this.props.degrees}`}>

                <div className="progressbar">

                    <div className="center"/>
                    <img src={this.props.imgSrc}/>

                </div>

                <p className="progress-list-values">{this.props.value}</p>

                <p className="progress-list-content">
                    {this.props.txt}
                </p>

            </li>
        );
    }
}

class ProgressList extends Component {
    render() {
        return (
            <ul className="row progress-list">

                <ProgressItem degrees='285' imgSrc={development} value='500' txt='years of web development'/>
                <ProgressItem degrees='225' imgSrc={results} value='25000' txt='results of the last winter year'/>
                <ProgressItem degrees='324' imgSrc={military} value='100000' txt='euros of the military budget'/>

            </ul>
        );
    }
}

class Progress extends Component {
    render() {
        return (
            <section className="progress d-flex align-items-center">

                <div className="container">

                    <h2 className="progress-title text-center">Company expirience</h2>

                    <ProgressList/>

                </div>

            </section>
        );
    }
}

export default Progress;