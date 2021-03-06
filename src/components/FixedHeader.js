import React, { Component } from 'react';

import search from '../img/search-button.png';

import mainLogo from '../img/main-logo.png';

import searchButton from '../img/search-button.png';

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

class SignedComp extends Component {
    render() {
        return  (
            <div className="container d-flex justify-content-between align-items-center">

                <div className="tools d-flex align-items-center">

                    <form action="#" method="get" name="search-form"
                          className="fixed-header-search d-flex align-items-center">

                        <input name="search-field" placeholder="Search" />

                            <button type="button" name="search">
                                <img src={searchButton} />
                            </button>

                    </form>

                    <a href="#" className="fixed-header-tool account">Account</a>

                    <a href="#" className="fixed-header-tool wishlist">Wishlist</a>

                    <a href="#" className="fixed-header-tool logout">Log out</a>

                </div>

                <a href="#" className="fixed-header-tool basket">26 items in Cart</a>

            </div>
        );
    }
}

class Toggler extends Component {
    render() {
        return (
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fa fa-2x fa-bars"/>
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

                <NavigationItem dir="/" txt="home" cls="nav-item home"/>

                <NavigationItem dir="#" txt="typography" cls="nav-item typography"/>

                <NavigationItem dir="/blog-grid" txt="blog" cls="nav-item blogposts"/>

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

                <div className="fixed-header-header">

                    {
                        (this.props.location.pathname==='/portfolio-grid')?

                            <div className="container d-flex justify-content-between align-items-center">

                                <SignedComp/>

                            </div>

                            :

                            <div className="container d-flex justify-content-between align-items-center">

                                <SearchForm/>

                                <Sign/>

                            </div>
                    }

                </div>

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