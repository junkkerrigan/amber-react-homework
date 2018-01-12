import React, { Component } from 'react';

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

                            <a href="blog-grid/item" className="learn-more">Learn more</a>

                            <span className="blog-list-comments">
                                <i className="fa fa-comments"/>
                                450
                            </span>

                        </div>

                </div>

            </li>
        );
    }
}

export default BlogItem;