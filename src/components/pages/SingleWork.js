import React, { Component } from 'react';

import Carousel from '../Carousel';

import map from 'lodash/map';

import workImage from '../../img/portf-s.jpg';

class SingleWork extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tags: ['Art Direction', 'Web Design'],
            checkboxes: [
                'Brownie ice cream carrot',
                'Carrot cake apple pie',
                'Love applicake I love',
                'Chocolate bar pudding'
            ]
        }
    }
    render() {

        const images=[workImage, workImage, workImage];

        return (
            <section className="swork">

                <div className="container row justify-content-center">

                    <div className="col-12 col-lg-9 swork-img">

                        <Carousel id='work' slidesNum={3} imgDir={images}>
                            <a className="carousel-control-prev swork-img-control prev" href="#work" role="button" data-slide="prev">
                                <i className="fa fa-angle-left" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next swork-img-control next" href="#work" role="button" data-slide="next">
                                <i className="fa fa-angle-right" />
                                <span className="sr-only">Next</span>
                            </a>

                        </Carousel>

                    </div>

                    <div className="swork-data col-lg-3">

                        <a className="carousel-control-prev swork-img-control prev outline" href="#work" role="button" data-slide="prev">
                            <i className="fa fa-angle-left" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next swork-img-control next outline" href="#work" role="button" data-slide="next">
                            <i className="fa fa-angle-right" />
                            <span className="sr-only">Next</span>
                        </a>

                        <span className="swork-likes">257</span>

                        <ul className="swork-tags d-flex">

                            {
                                map(this.state.tags, (item, index) => {
                                    return <li className="swork-tags-item">
                                        <a href="#" className="swork-tags-link">
                                            {item}
                                        </a>
                                    </li>;
                                })
                            }

                        </ul>

                        <p className="swork-description">
                            Gingerbread candy chupa chups topping. Halvah cake croissant
                            jelly beans. Unerdwear.com brownie lollipop sesame snaps bear
                            claw sweet roll sweet I love soufflé.
                        </p>

                        <p className="swork-description">
                            Caramels powder gummies pudding danish sesame snaps. Sweet
                            roll caramels fruitcake bonbon unerdwear.
                        </p>

                        <h5 className="swork-description title">
                            Work description
                        </h5>

                        <ul className="swork-checkboxes">

                            {
                                map(this.state.checkboxes, (item, index) => {
                                    return <li className="swork-checkboxes-item">
                                        {item}
                                    </li> ;
                                })
                            }

                        </ul>

                        <a href="#" className="swork-buy">
                            buy now
                        </a>

                    </div>

                </div>

            </section>

    );
    }
}

export default SingleWork;