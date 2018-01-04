import React, {Component} from 'react';

import mainImage from '../../img/blog-single-main.jpg';

import contentImage from '../../img/blog-single-img.jpg';

import latestWork from '../../img/blog-single-img-2.jpg';

import map from 'lodash/map'

class ContentTitle extends Component {
    render() {
        return (
            <h3 className='content-title'>{this.props.txt}</h3>
        );
    }
}

class ContentParagraph extends Component {
    render() {
        return (
            <p className="content-text">{this.props.txt}</p>
        );
    }
}

class BlockQuote extends Component {
    render() {
        return (
            <blockquote className="content-quote">
                {this.props.txt}
                <cite className="content-quote-author">
                    {this.props.author}
                </cite>
            </blockquote>
        );
    }
}

class ContentTag extends Component {
    render() {
        return(
            <li>
                <a href="#" className="content-tags-item">
                    {this.props.value}
                </a>
            </li>
        );
    }
}

class Content extends Component {

    constructor(props) {
        super(props);

        this.state={
          tagValues: ['amber', 'dance', 'fashion', 'sultan', 'onmouseover tag'],

        };
    }

    render() {
        return (
            <section className="content col-lg-9 col-12">

                <img src={mainImage} alt="main image"
                     className="content-main-image" width="690" />

                <article>

                    <ContentTitle txt='These are the Americans that I know' />

                    <ContentParagraph txt='No health care? The market will fix it. I have come here
                        to seek a new beginning between the United States and
                        Muslims around the world; one based upon mutual interest
                        and mutual respect; and one based upon the truth that
                        America and Islam are not exclusive, and need not be in
                        competition. On economic development, we will create a
                        new corps of business volunteers to partner with
                        counterparts in Muslim-majority countries.' />

                    <BlockQuote txt='Thereby, the whale commanders are enabled to recognise
                        each other upon the ocean, even at considerable distances
                        and with no small facility.' author='Moby-Dick, Herman Melville' />

                    <ContentParagraph txt='Tell that to the proud auto workers at a Michigan plant
                        who, after they found out it was closing, kept showing
                        up every day and working as hard as ever, because they
                        knew there were people who counted on the brakes that
                        they made.' />

                </article>

                    <article>

                        <ContentTitle txt='Michigan plant who, after they found' />

                        <ContentParagraph txt='It was closing, kept showing up every day and working as
                            hard as ever, because they knew there were people who
                            counted on the brakes that they made. Michigan plant who,
                            after they found out it was closing, kept showing up
                            every day and working as hard as ever, because. Tell
                            that to the proud auto workers at a Michigan plant who,
                            after they found out it was closing, kept showing up
                            every day and working as hard as ever, because they knew
                            there were people who counted on the brakes that they made.' />

                        <ContentParagraph txt='Michigan plant who, after they found out it was closing,
                            kept showing up every day and working as hard as ever,
                            because they knew there were people who counted on the
                            brakes that they made. Michigan plant who, after they
                            found out it was closing, kept showing up every day and
                            working as hard as ever, because.' />

                        <div className="content-img-wrapper d-flex">

                            <img src={contentImage} width="210"
                                 height="160" alt="content image" />

                            <img src={contentImage} width="210"
                                 height="160" alt="content image" />

                            <img src={contentImage} width="210"
                                 height="160" alt="content image" />

                        </div>

                        <ContentParagraph txt='Because they knew there were people who counted
                            on the brakes that they made. Michigan plant
                            who, after they found out it was closing,
                            kept showing up every day and working as hard as ever,
                            because they knew there were people who counted on the
                            brakes that they made. Michigan plant who, after they
                            found out it was closing, kept showing up every day and
                            working as hard as ever, because.' />

                        <ContentParagraph txt='Tell that to the proud auto workers at a Michigan plant
                            who, after they found out it was closing, kept showing up
                            every day and working as hard as ever, because they knew
                            there were people who counted on the brakes that they made.' />

                    </article>

                    <div className="content-tags d-flex">

                        <span className="content-tags-title">Tags:</span>

                        <ul className="d-flex">

                            {
                                map(this.state.tagValues, (item,index) =>{
                                    return <ContentTag value={item} />;
                                })
                            }

                        </ul>

                    </div>

            </section>
        );
    }
}

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

                <section className="works">

                    <SidebarTitle txt='Latest works' />

                    <img src={latestWork} />

                    <div className="d-flex works-control justify-content-center">

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
                            map(this.stats.tags, (item, index) => {
                                return <SidebarTag value={item}/> ;
                            })
                        }

                    </ul>

                </section>


            </aside>
        );
    }
}

class extends Component {
    render() {
        return (

        );
    }
}










