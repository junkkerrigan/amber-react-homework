import React, { Component } from 'react';

import RelatedPosts from "../RelatedPosts";

import Article from "../Article";

import Sidebar from "../Sidebar";

import Comments from "../Comments";

class BlogSingle extends Component {
    render() {
        return (
            <div className='inside'>

                <div className="d-flex flex-column align-items-center">

                    <div className="container row justify-content-center">

                        <Article />

                        <Sidebar />

                    </div>

                    <RelatedPosts />

                </div>

                <div className="comments-wrapper d-flex flex-column align-items-center">

                    <Comments />

                </div>

            </div>
        )
    }
}

export default BlogSingle;