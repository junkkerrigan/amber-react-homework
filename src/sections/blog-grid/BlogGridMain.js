import React, { Component } from 'react';

import work1 from '../../img/work-1.jpg'

import work2 from '../../img/work-2.jpg'

import work3 from '../../img/work-3.jpg'

import BlogItem from '../main/BlogItem';

import map from 'lodash/map';

class PaginationItem extends Component {
    render() {
        return (
            <li className="page-item">
                <a className="page-link" href="">{`${this.props.num}`}</a>
            </li>
        );
    }
}

class BlogGridMain extends Component {
    render() {

        const imageList = [
            work1, work2, work3,
            work1, work2, work3,
            work1, work2, work3
        ];

        const pageList = [
          '1', '2', '3', '4', '5', '6', '7', '...', '2015'
        ];

        return (
            <section className="blog">

                <div className="container">

                    <ul className='blog-list row'>

                        {
                            map(imageList, (item, index) => {
                                return <BlogItem number={item}/>
                            })
                        }

                    </ul>

                    <nav aria-label="Page navigation example">

                        <ul className="pagination justify-content-center">

                            {
                                map(pageList, (item, index) => {
                                    return <PaginationItem num={item}/>
                                })
                            }

                        </ul>

                    </nav>

                </div>

            </section>
        );
    }
}

export default BlogGridMain;