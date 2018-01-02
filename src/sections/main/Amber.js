import React, { Component } from 'react';

import forward from '../../img/forward.png';

class Amber extends Component {
    render() {
        return (
            <section className="amber">

                <div className="container d-flex text-center">

                    <h2 className="amber-title">
                        Amber is the most metrolly WordPress theme ever created.
                    </h2>

                    <a href="#" className="amber-purchase btn btn-primary">
                        purchase now
                        <img src={forward}/>
                    </a>

                </div>

            </section>
        );
    }
}

export default Amber;


/*
class Amber extends Component {
    render() {
        return (

        );
    }
}
 */