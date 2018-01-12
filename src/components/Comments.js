import React, { Component } from 'react';

import map from 'lodash/map';

class Form extends Component {
    render() {
        return (
            <form className="ncomment-form row" action="#" method="post">

                <label className="col-md-4">
                    Name
                    <input type="text" name="user-name" />
                </label>

                <label className="col-md-4">
                    Email
                    <input type="email" name="user-email" />
                </label>

                <label className="col-md-4">
                    Website
                    <span className="little">(optional)</span>
                    <input type="text" name="user-website" />
                </label>

                <label className="col-12 message-label">
                    Message
                    <textarea name="user-message" />
                </label>

                <button type="submit" className="ncomment-form-submit">
                    add comment
                </button>

            </form>
        );
    }
}

class CommentItem extends Component {
    render() {
        return (
            <li className={`ocomments-item ${(this.props.isAnswer==='yes')? 'answer' : ''}`}>

                <button type="button" className="ocomments-reply">
                    Reply
                </button>

                <div className="ocomments-item-data">

                    <a href="#" className="ocomment-author">
                        {this.props.author}
                    </a>

                    <div className="ocomment-datetime">

                        <span>
                            {this.props.date}
                        </span>

                        <span>
                            {this.props.time}
                        </span>

                    </div>

                </div>

                <p className="ocomments-item-content">
                    {this.props.txt}
                </p>

            </li>
        );
    }
}

class Comments extends Component {

    constructor(props) {
        super(props);

        this.state = {
          author: [
              'Administrator',
              'Alina',
              'Administrator'
          ],
          date: [
              'September 17,2013',
              'September 17,2013',
              'September 17,2013'
          ],
          time: [
              '1:38 pm',
              '1:38 pm',
              '1:38 pm'
          ],
          text: [
              'Small batch sartorial, single-origin coffee food truck tousled sed swag hella synth bitters next level consectetur Helvetica twee. Craft beer ea tofu sint reprehenderit cornhole, occaecat put a bird on it single-origin coffee Tonx. Small batch 3 wolf moon ad, adipisicing fap cornhole.',
              'Small batch sartorial, single-origin coffee food truck tousled sed swag hella synth bitters next level consectetur Helvetica twee. Craft beer ea tofu sint reprehenderit cornhole, occaecat put a bird on it single-origin coffee Tonx. Small batch 3 wolf moon ad, adipisicing fap cornhole.',
              'Small batch sartorial, single-origin coffee food truck tousled sed swag hella synth bitters next level consectetur Helvetica twee. Craft beer ea tofu sint reprehenderit cornhole, occaecat put a bird on it single-origin coffee Tonx. Small batch 3 wolf moon ad, adipisicing fap cornhole.'
          ],
          isAns: [
              'no',
              'yes',
              'no'
          ]
        };
    }
    render() {
        return (
            <section className="comments container row">

                <div className="col-lg-9 col-12">

                    <Form />

                    <section className="ocomments">

                        <h4 className="ocomments-title">24 comments</h4>

                        <ul className="ocomments-list">

                            {
                                map(this.state.author, (item, index) => {
                                    return <CommentItem author={item}
                                    date={this.state.date[index]} time={this.state.time[index]}
                                    txt={this.state.text[index]} isAnswer={this.state.isAns[index]}/>
                                })
                            }

                        </ul>

                    </section>

                </div>

            </section>
        );
    }
}

export default Comments;