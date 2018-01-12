import React, {Component} from 'react';

import map from 'lodash/map'

class NavItem extends Component {
    render() {
        return (
            <li>
                <a href="#" className="navigation-item">
                    {this.props.name}
                </a>
            </li>
        );
    }
}

class SubpageHeader extends Component {
    render() {
        const dataList=[
            'Home',
            'Shortcodes',
            'Typography',
            'Blog'
        ], title={
            '/blog-grid': 'Blog grid view',
            '/blog-grid/item':'Blog post title goes here',
            '/portfolio-grid/item':'Blog post title goes here',
            '/portfolio-grid':'Portfolio grid gallery'
        };

        const path=this.props.location.pathname;
        console.log(path);
        return (
            <section className="main-header" id="blog-grid">

                <div className="container">

                    <h2 className="main-header-title">
                        {title[path]}
                    </h2>

                    <div className="main-header-wrapper d-flex">

                        <ul className="page-data d-flex">

                            <li className="page-author">
                                by Alex Poushkin
                            </li>

                            <li className="page-date">
                                September 31
                            </li>

                            <li className="page-comments-n">
                                12 Comments
                            </li>

                        </ul>

                        <nav className="main-header-navigation">

                            <ul className="d-flex">

                                {
                                    map(dataList, (item, index) => {
                                        return <NavItem name={item}/>;
                                    })
                                }

                            </ul>

                        </nav>

                    </div>

                </div>

            </section>
        );
    }
}
/*class SubpageHeader extends Component {
    render() {
        return (

        );
    }
}
class SubpageHeader extends Component {
    render() {
        return (

        );
    }
}
class SubpageHeader extends Component {
    render() {
        return (

        );
    }
}
class SubpageHeader extends Component {
    render() {
        return (

        );
    }
}
class SubpageHeader extends Component {
    render() {
        return (

        );
    }
}*/

export default SubpageHeader;