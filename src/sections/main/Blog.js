import React, { Component } from 'react';

import work1 from '../../img/work-1.jpg'

import work2 from '../../img/work-2.jpg'

import work3 from '../../img/work-3.jpg'

import BlogItem from './BlogItem';

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