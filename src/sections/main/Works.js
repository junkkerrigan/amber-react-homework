import React, { Component } from 'react';

import WorkItem from './WorkItem';

import work1 from '../../img/work-1.jpg';

import work2 from '../../img/work-2.jpg';

import work3 from '../../img/work-3.jpg';

import back from '../../img/back.png';

import forward from '../../img/forward.png';

import map from 'lodash/map';

class WorksList extends Component {
    render() {
        return (
            <ul className="works-list row">

                {
                    map(this.props.worksData, (item,index) => {
                        return <WorkItem dir='/portfolio-grid' imgSrc={item.image} workTitle={item.name}
                                         category={item.category}/>
                    })
                }

            </ul>
        );
    }
}


class Works extends Component {
    render() {
        const dataList = [
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
        ];
        return (
            <section className="works">

                <div className="container text-center">

                    <h2 className="works-title">Latest works</h2>

                    <p className="works-content">
                        That we can tuck in our children at night and know that they are
                        fed and clothed and safe from harm. Our trials and triumphs became
                        at once unique and universal.
                    </p>

                    <WorksList worksData={dataList}/>

                    <div className="control">

                        <button type="button">
                            <img src={back}/>
                        </button>

                        <button type="button">
                            <img src={forward}/>
                        </button>

                    </div>

                    <a href="/portfolio-grid" className="resp-more btn btn-primary">
                        Load more
                    </a>

                </div>

            </section>
        );
    }
}

export default Works;

/*
class Works extends Component {
    render() {
        return (

        );
    }
}
 */
