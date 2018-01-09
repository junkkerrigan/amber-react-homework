import React, { Component } from 'react';

import like from '../../img/action-like.png';

import more from '../../img/action-more.png';

import chain from '../../img/action-chain.png';

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

                <a href={this.props.dir} className="more">
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

                <WorkItemActions dir={this.props.dir}/>

            </li>
        );
    }
}

export default WorkItem;