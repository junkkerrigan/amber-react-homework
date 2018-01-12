import React, { Component } from 'react';

import map from '../img/map.png'

class TouchItem extends Component {
    render() {
        return (
            <li>

                <p className="touch-item">

                    <i className={`fa fa-${this.props.icon}`}></i>
                    <span className="touch-item-title">{this.props.title}</span>
                    {this.props.txt}

                </p>

            </li>
        );
    }
}

class TouchList extends Component {
    render() {
        return (
            <ul>

                <TouchItem icon='flag' title='Address: ' txt='321 Street Name, United Kingdom, London'/>

                <TouchItem icon='phone' title='Phone: ' txt='+7 998 71 150 30 20'/>

                <TouchItem icon='envelope' title='Email: ' txt='info@ambertheme.com'/>

            </ul>
        );
    }
}

class TweetsItem extends Component {
    render() {
        return (
            <li>

                <p className="tweets-item">

                    <i className="fa fa-twitter"></i>
                    <span className="tweets-item-title">
                        {this.props.title}
                            </span>
                    {this.props.txt}

                </p>

            </li>
        );
    }
}

class TweetsList extends Component {
    render() {
        return (
            <ul>

                <TweetsItem title='CMS Masters And Their Best Web Design Tools' txt='#bestwebdesigntools #webdesign'/>
                <TweetsItem title='WOOCOMMERCE functionality added!!! See Industrial
                                theme become even powerful! -' txt='bit.ly/industrial-wp'/>
                <TweetsItem title='CMS Masters And Their Best Web Design Tools' txt='#bestwebdesigntools #webdesign'/>

            </ul>

        );
    }
}

class FollowItem extends Component {
    render() {
        return (
            <li className="follow-list-item">

                <a href="#" className={`follow-link ${this.props.sns}`}>
                    <i className={`fa fa-2x fa-${this.props.snsIcon}`}></i>
                </a>

                <p className="follow-list-content">
                    {this.props.txt}
                </p>

            </li>
        );
    }
}

class FollowList extends Component {
    render() {
        return (
            <ul className="follow-list">

                <FollowItem sns='fb' snsIcon='facebook-f' txt='Like us on Facebook'/>

                <FollowItem sns='tw' snsIcon='twitter' txt='Follow us on Twitter'/>

                <FollowItem sns='ytb' snsIcon='youtube' txt='Watch videos on YouTube'/>

                <FollowItem sns='inst' snsIcon='instagram' txt='Friend us on Instagram'/>

                <FollowItem sns='pin' snsIcon='pinterest-p' txt='Repin on Pinterest'/>

            </ul>
        );
    }
}

class PostsItem extends Component {
    render() {
        return (
            <li>

                <p className="posts-list-title">{this.props.title}</p>
                <p className="posts-list-content">
                    {this.props.txt}
                </p>

            </li>
        );
    }
}

class PostsList extends Component {
    render() {
        return (
            <ul className="posts-list">

                <PostsItem title='September, 30' txt='Candy canes dragée pudding. Donut cheesecake I
                        love chocolate icing'/>

                <PostsItem title='April, 22' txt='Muffin croissant cookie sesame snaps. Ice cream
                        donut cookie gingerbread'/>

                <PostsItem title='May, 12' txt='Cotton candy muffin tart gummies candy danish
                        liquorice chupa chups tootsie roll'/>

            </ul>
        );
    }
}

class FooterList extends Component {
    render() {
        return (
            <ul className="footer-list row">

                <li className="footer-list-item col-12 col-md-6 col-lg-3 touch">

                    <h3 className="footer-item-title">Get in touch</h3>

                    <address>

                        <TouchList/>

                        <img src={map}/>

                    </address>

                </li>

                <li className="footer-list-item col-12 col-md-6 col-lg-3 tweets">

                    <h3 className="footer-item-title">Latest tweets</h3>

                    <TweetsList/>

                </li>

                <li className="footer-list-item col-12 col-md-6 col-lg-3 follow">

                    <h3 className="footer-item-title">Follow us</h3>

                    <FollowList/>

                </li>

                <li className="footer-list-item col-12 col-md-6 col-lg-3 posts">

                    <h3 className="footer-item-title">Popular posts</h3>

                    <PostsList/>

                </li>

            </ul>
        );
    }
}

class FooterBottom extends Component {
    render() {
        return (
            <footer>

                <address>

                    <p className="copyright">
                        © 2014 StylemixThemes. All rights reserved.
                    </p>
                    <p className="copyright">
                        Powered by WordPress.
                    </p>

                </address>

                <a href="#" className="go-top">
                    Back to top of page
                    <i className="fa fa-angle-up fa-2x"></i>
                </a>

            </footer>
        );
    }
}

class Footer extends Component {
    render() {
        return (
            <footer className="footer">

                <div className="container">

                    <FooterList/>

                    <FooterBottom/>

                </div>

            </footer>
        );
    }
}


export default Footer;