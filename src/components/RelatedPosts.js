import React, {Component} from 'react';

import map from 'lodash/map'

class PostItem extends Component {
    render() {
        return(
            <li className="related-item col-sm-12 col-md-4">

                <span className="related-date">{this.props.date}</span>

                <a href="#" className="related-link">
                    {this.props.txt}
                </a>

            </li>
        );
    }
}

class RelatedPosts extends Component {

    constructor(props) {
        super(props);

        this.state={
            date: [
                'June 24',
                'August 8',
                'August 13'
            ],
            text: [
                'The hope of a young naval lieutenant bravely patrolling',
                'Politicians routinely exploited fears of crime Christian',
                'There was even a time when the Christian Coalition determined that its number one'
            ]
        }
    }
    render() {
        return(
            <section className="related container row">

                <div className="col-12 col-lg-9">

                    <h3 className="related-title">Related posts</h3>

                    <ul className="related-list row">

                        {
                            map(this.state.date, (item, index) => {
                                return <PostItem date={item} txt={this.state.text[index]} />
                            })
                        }

                    </ul>

                </div>

            </section>
        );
    }
}

export default RelatedPosts;