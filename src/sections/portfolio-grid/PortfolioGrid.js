import React, { Component } from 'react';

import map from 'lodash/map';

import WorkItem from '../main/WorkItem';

import work1 from '../../img/work-1.jpg';

import work2 from '../../img/work-2.jpg';

import work3 from '../../img/work-3.jpg';


class Filter extends Component {
    render() {
        return (
            <li className="filters-item">
                <a href="#" className="filters-link">
                    {this.props.filterName}
                </a>
            </li>
        );
    }
}

class PortfolioGrid extends Component {

    constructor(props) {
        super(props);
        this.state= {
            filter: [
                'View all',
                'Videos',
                'Photos',
                'Games',
                'Apps',
                'Poisons'
            ],
            itemData: [
                {
                    image: work1,
                    name: 'Lindemans Wine',
                    category: 'Art Direction, Web Design'
                },
                {
                    image: work2,
                    name: 'Lindemans Wine',
                    category: 'Art Direction, Web Design'
                },
                {
                    image: work3,
                    name: 'Marketing materials and branding',
                    category: 'Photography, Web Design'
                },
                {
                    image: work1,
                    name: 'Lindemans Wine',
                    category: 'Art Direction, Web Design'
                },
                {
                    image: work2,
                    name: 'Lindemans Wine',
                    category: 'Art Direction, Web Design'
                },
                {
                    image: work3,
                    name: 'Marketing materials and branding',
                    category: 'Photography, Web Design'
                },
                {
                    image: work1,
                    name: 'Lindemans Wine',
                    category: 'Art Direction, Web Design'
                },
                {
                    image: work2,
                    name: 'Lindemans Wine',
                    category: 'Art Direction, Web Design'
                },
                {
                    image: work3,
                    name: 'Marketing materials and branding',
                    category: 'Photography, Web Design'
                }
            ]
        }
    }
    render() {
        return (
            <section className="works grid">

                <div className="container">

                    <p className="works-data">
                        Gingerbread candy chupa chups topping. Halvah cake croissant
                        jelly beans. Unerdwear.com brownie lollipop sesame snaps bear
                        claw sweet roll sweet I love soufflé. Caramels powder gummies
                        pudding danish sesame snaps. Sweet roll caramels fruitcake
                        bonbon unerdwear.com brownie ice cream carrot cake. Carrot
                        cake apple pie gummies I love applicake I love I love chocolate
                        bar pudding.
                    </p>

                    <ul className="filters d-flex">

                        {
                            map(this.state.filter, (item, index) => {
                                return <Filter filterName={item}/>
                            })
                        }

                    </ul>

                    <ul className='works-list row'>

                        {
                            map(this.state.itemData, (item, index) => {
                                return <WorkItem dir='/portfolio-grid/item' imgSrc={item.image} workTitle={item.name}
                                                 category={item.category}/>
                            })
                        }

                    </ul>

                    <button type="button" className="works-more">
                        Show more images
                    </button>

                </div>

            </section>
        );
    }
}

export default PortfolioGrid;
