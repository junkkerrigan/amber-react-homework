import React, { Component } from 'react';

import './styles/main/App.css';

import SubpageHeader from "./components/SubpageHeader";

import BlogSingle from "./components/pages/BlogSingle";

import MainLayout from './components/MainLayout';

import PortfolioGrid from "./components/pages/PortfolioGrid";

import SingleWork from "./components/pages/SingleWork";

import MainPage from './components/pages/MainPage';

import BlogGrid from './components/pages/BlogGrid';

import FixedHeader from "./components/FixedHeader";

import Footer from "./components/Footer";

import { Router, Route } from 'react-router-dom'

import createBrowserHistory from '../node_modules/history/createBrowserHistory';

const customHistory=createBrowserHistory();

class App extends Component {
  render() {
    return (
        <Router history={customHistory}>

            <div>

            <Route component={FixedHeader}/>

            <Route exact path='/' component={MainPage} />

            <Route component={SubpageHeader} />

            <Route exact path='/blog-grid' component={BlogGrid} />

            <Route path='/blog-grid/item' component={BlogSingle} />

            <Route exact path='/portfolio-grid' component={PortfolioGrid} />

            <Route path='/portfolio-grid/item' component={SingleWork} />

            <Route component={Footer}/>

            </div>

        </Router>
    );
  }
}

export default App;


/*<div>

                <Route path='/' component={FixedHeader}/>

                <Route exact path='/blog-grid' render={ () => <SubpageHeader
                title='Blog grid view'/>} />

                <Route strict path='/blog-grid/' render={ () => <SubpageHeader
                    title='Blog post title goes here'/>} />

                <Route strict path='/portfolio-grid/' render={ () => <SubpageHeader
                    title='Blog post title goes here'/>} />

                <Route strict path='/portfolio-grid/' component={SingleWork}/>

                <Route exact path='/portfolio-grid' render={ () => <SubpageHeader
                    title='Portfolio grid gallery'/>} />

                <Route exact path='/portfolio-grid' component={PortfolioGrid} />

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

            </div>*/





/*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/