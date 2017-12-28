import React, { Component } from 'react';

import work1 from '../img/work-1.jpg'

import work2 from '../img/work-2.jpg'

import work3 from '../img/work-3.jpg'

class BlogItem extends Component {
    render() {
        return (
            <li className="blog-list-item col-12 col-lg-4">

                <div className="blog-border">

                    <img src={this.props.number} width="290" height="220"/>

                        <h3 className="blog-list-title">
                            Runway to Red Carpet: Awards Season
                        </h3>

                        <p className="blog-list-content">
                            Her father worked on oil rigs and farms that
                            through most of the Depression. But it is a new
                            story that has seared into my genetic.
                        </p>

                        <div className="blog-list-full">

                            <a href="blog-single.html#blog-item" className="learn-more">Learn more</a>

                            <span className="comments">
                                <i className="fa fa-comments"></i>
                                450
                            </span>

                        </div>

                </div>

            </li>
        );
    }
}

class BlogList extends Component {
    render() {
        return (
            <ul className="blog-list row">
                <BlogItem number={work1}/>
                <BlogItem number={work2}/>
                <BlogItem number={work3}/>
            </ul>
        );
    }
}

class Blog extends Component {
    render() {
        return (
            <section className="blog">

                <div className="container">

                    <h2 className="blog-title text-center">
                        Latest blog posts
                    </h2>

                    <BlogList/>

                </div>

            </section>
        );
    }
}

export default Blog;