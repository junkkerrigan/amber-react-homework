import React, {Component} from 'react';

import map from 'lodash/map'

import latestWork from '../img/blog-single-img-2.jpg';

class SidebarCategory extends Component {
    render() {
        return(
            <li className="categories-item">
                <a href="#" className="categories-link">
                    {this.props.name}
                </a>
            </li>
        );
    }
}

class SidebarTitle extends Component {
    render() {
        return (
            <h4 className="sidebar-title">{this.props.txt}</h4>
        );
    }
}

class SidebarTag extends Component {
    render() {
        return (
            <li className="tag-cloud-item">
                <a href="#" className="tag-cloud-link">
                    {this.props.value}
                </a>
            </li>
        );
    }
}

class SidebarRecentComment extends Component{
    render() {
        return (
            <li className="rcomments-item">

                <span className="rcomments-author">
                    {this.props.author}
                </span>

                <a href="#" className="rcomments-target">
                    {this.props.target}
                </a>

            </li>
        );
    }
}

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state={
            categories: [
                'Creative portfolio',
                'Onmouseover category',
                'Amber golden',
                'Amsterdam fight gear',
                'Creamy cucumber'
            ],
            tags: [
                'bad boy',
                'winter',
                'is coming',
                'south',
                'mouseover',
                'asia',
                'surfing',
                'iceland',
                'she',
                'china',
                'daytona'
            ],
            author: [
                'Igor Ligay',
                'Farhad Yusupov',
                'John Doe'
            ],
            target: [
                'The hope of a young naval lieutenant bravely patrolling',
                'Politicians routinely exploited fears of crime',
                'There was even a time when the Christian Coalition determined that its number one'
            ]
        }
    }

    render() {
        return (
            <aside className="content-sidebar col-lg-3">

                <section className="categories">

                    <SidebarTitle txt='Categories'/>

                    <ul className="categories-list">

                        {
                            map(this.state.categories, (item, index) => {
                                return <SidebarCategory name={item} />;
                            })
                        }

                    </ul>

                </section>

                <section className="rcomments">

                    <SidebarTitle txt='Recent comments' />

                    <ul className="rcomments-list">

                        {
                            map(this.state.author, (item, index) => {
                                return <SidebarRecentComment author={item} target={this.state.target[index]} />;
                            })
                        }

                    </ul>

                </section>

                <section className="latest-works">

                    <SidebarTitle txt='Latest works' />

                    <img src={latestWork} />

                    <div className="d-flex latest-works-control justify-content-center">

                        <button type="button">
                            <i className="fa fa-angle-left" />
                        </button>

                        <button type="button">
                            <i className="fa fa-angle-right" />
                        </button>

                    </div>

                </section>

                <section className="tag-cloud">

                    <SidebarTitle txt='Tag cloud' />

                    <ul className="tag-cloud-list d-flex flex-wrap">

                        {
                            map(this.state.tags, (item, index) => {
                                return <SidebarTag value={item}/> ;
                            })
                        }

                    </ul>

                </section>


            </aside>
        );
    }
}

export default Sidebar;