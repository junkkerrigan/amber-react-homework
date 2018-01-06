import React, { Component } from 'react';

import './styles/main/App.css';

import FixedHeader from './sections/main/FixedHeader';

import Welcome from './sections/main/Welcome';

import Steal from "./sections/main/Steal";

import Works from "./sections/main/Works";

import Amber from "./sections/main/Amber";

import Features from "./sections/main/Features";

import Quote from "./sections/main/Quote";

import Blog from "./sections/main/Blog";

import Progress from "./sections/main/Progress";

import Team from "./sections/main/Team";

import Footer from "./sections/main/Footer";

import SubpageHeader from "./sections/blog-grid/SubpageHeader";

import BlogGridMain from "./sections/blog-grid/BlogGridMain";

import RelatedPosts from "./sections/blog-item/RelatedPosts";

import Article from "./sections/blog-item/Article";

import Sidebar from "./sections/blog-item/Sidebar";

import Comments from "./sections/blog-item/Comments";

import { Router, Route } from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory';

const curHistory=createBrowserHistory();

class App extends Component {
  render() {
    return (
        <Router history={curHistory}>

            <div>

                <Route path='/' component={FixedHeader}/>

                <Route exact path='/blog-grid' render={ () => <SubpageHeader
                title='Blog grid view'/>} />

                <Route strict path='/blog-grid/' render={ () => <SubpageHeader
                    title='Blog post title goes here'/>} />

                <Route strict path='/blog-grid/' render={ () =>

                    <div className="d-flex flex-column align-items-center">

                        <div className="container row justify-content-center">

                            <Route path='/' component={Article} />

                            <Route path='/' component={Sidebar} />

                        </div>

                        <Route path='/' component={RelatedPosts} />

                    </div>

                }/>

                <Route strict path='/blog-grid/' render={ () =>

                    <div className="comments-wrapper d-flex flex-column align-items-center">

                        <Route path='/' component={Comments}/>

                    </div>


                } />

                <Route exact path='/blog-grid' component={BlogGridMain}/>

                <Route exact path='/' component={Welcome}/>

                <Route exact path='/' component={Steal}/>

                <Route exact path='/' component={Works}/>

                <Route exact path='/' component={Amber}/>

                <Route exact path='/' component={Features}/>

                <Route exact path='/' component={Quote}/>

                <Route exact path='/' component={Blog}/>

                <Route exact path='/' component={Progress}/>

                <Route exact path='/' component={Team}/>

                <Route path='/' component={Footer}/>

            </div>

        </Router>
    );
  }
}

export default App;






/*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/