import React, { Component } from 'react';

import search from '../img/search-button.png';

import mainLogo from '../img/main-logo.png';

class SearchForm extends Component {
    render() {
        return (
            <form action="#" method="get" name="search-form"
                  className="fixed-header-search d-flex align-items-center">

                <input name="search-field" placeholder="Search"/>

                    <button type="button" name="search">
                        <img src={search}/>
                    </button>

            </form>
        );
    }
}

class Sign extends Component {
    render() {
        return (
            <div className="d-flex">

                <a href="#" className="fixed-header-login d-flex">Login</a>
                <a href="#" className="fixed-header-register d-flex">Register</a>

            </div>
        );
    }
}


class Header extends Component {
    render() {
        return (
            <div className="fixed-header-header">

                <div className="container d-flex justify-content-between align-items-center">

                    <SearchForm/>

                    <Sign/>

                </div>

            </div>
        );
    }
}

class Toggler extends Component {
    render() {
        return (
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-2x fa-bars"></i>
            </button>
        );
    }
}

class Logo extends Component {
    render() {
        return (
            <h1 className="main-logo">

                <a href="#" className="navbar-brand">
                    <img src={mainLogo} alt="LOGO"/>
                </a>

            </h1>
        );
    }
}

class NavigationItem extends Component {
    render() {
        return (
            <li className={this.props.cls}>
                <a href={this.props.dir} className="nav-link">{this.props.txt}</a>
            </li>
        );
    }
}

class Navigation extends Component {
    render() {
        return (
            <ul className="navbar-nav d-flex">

                <NavigationItem dir="main.html#home" txt="home" cls="nav-item home"/>

                <NavigationItem dir="#" txt="typography" cls="nav-item typography"/>

                <NavigationItem dir="blog-grid.html#blog-grid" txt="blog" cls="nav-item blogposts"/>

                <NavigationItem dir="#" txt="pages" cls="nav-item pages"/>

                <NavigationItem dir="#" txt="elements" cls="nav-item elements"/>

                <NavigationItem dir="#" txt="eccomerse" cls="nav-item eccomerse"/>

                <NavigationItem dir="#" txt="mega menu" cls="nav-item menu"/>

            </ul>

        );
    }
}


class FixedHeader extends Component {
    render() {
        return (
            <header className="fixed-top fixed-header">

                <Header/>

                <div className="fixed-header-bg d-flex justify-content-center">

                    <div className="container">

                        <nav className="navbar navbar-expand-lg">

                            <Toggler/>

                            <Logo/>

                            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                                <Navigation/>

                            </div>

                        </nav>

                    </div>

                </div>

            </header>
        );
    }
}

export default FixedHeader;


/*
class searchForm extends Component {
    render() {
        return (

        );
    }
}
 */