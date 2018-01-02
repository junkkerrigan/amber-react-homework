import React, { Component } from 'react';

import like from '../../img/action-like.png';

import more from '../../img/action-more.png';

import chain from '../../img/action-chain.png';

import work1 from '../../img/work-1.jpg';

import work2 from '../../img/work-2.jpg';

import work3 from '../../img/work-3.jpg';

import back from '../../img/back.png';

import forward from '../../img/forward.png';

import map from 'lodash/map';

class WorkItemData extends Component {
    render() {
        return (
            <div className="works-list-data">

                <div className="info">

                    <p className="info-title">
                        {this.props.workTitle}
                    </p>

                    <p className="info-category">
                        {this.props.category}
                    </p>

                </div>

                <span className="likes">257</span>

            </div>
        );
    }
}

class WorkItemActions extends Component {
    render() {
        return (
            <div className="actions">

                <button type="button" className="like">
                    <img src={like}/>
                </button>

                <a href="portfolio-grid.html#works-grid" className="more">
                    <img src={more}/>
                </a>

                <a href="#" className="chain">
                    <img src={chain}/>
                </a>

            </div>
        );
    }
}

class WorkItem extends Component {
    render() {
        return (
            <li className="works-list-item col-12 col-lg-4 d-flex justify-content-center">

                <img src={this.props.imgSrc} className="example" alt="works example" width="290" height="290"/>

                <WorkItemData workTitle={this.props.workTitle} category={this.props.category}/>

                <WorkItemActions/>

            </li>
        );
    }
}

class WorksList extends Component {
    render() {
        return (
            <ul className="works-list row">

                {
                    map(this.props.worksData, (item,index) => {
                        console.log(item.image);
                        return <WorkItem imgSrc={item.image} workTitle={item.name} category={item.category}/>
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

                    <a href="portfolio-grid.html#works-grid" className="resp-more btn btn-primary">
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
