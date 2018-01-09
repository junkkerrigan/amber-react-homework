import React, { Component } from 'react';

import map from 'lodash/map';

import range from 'lodash/range';

class Carousel extends Component {
    render() {

        const slideDir=range(this.props.slidesNum);

        return (
            <div id={this.props.id} className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">

                    {
                        map(slideDir, (item, index) => {
                            return <li data-target={`#${this.props.id}`} data-slide-to={`${item}`}
                            className={(item)? '' : 'active'} />
                        })
                    }

                </ol>
                <div className="carousel-inner">

                    {
                        map(slideDir, (item, index) => {
                            return <div className={`carousel-item ${(item)? '' : 'active'}`}>
                                        <img className="d-block w-100" src={this.props.imgDir[index]}
                                             alt={`${item} slide`}/>
                                    </div>;
                        })
                    }

                </div>

                {this.props.children}

            </div>
        );
    }
}

export default Carousel;