import React, {Component} from 'react';

import mainImage from '../../img/blog-single-main.jpg';

import contentImage from '../../img/blog-single-img.jpg';

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

class Article extends Component {

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

export default Article;














