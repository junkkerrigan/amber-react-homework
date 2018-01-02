import React, { Component } from 'react';

class FeaturesItem extends Component {
    render() {
        return (
            <li className={`features-list-item col-12 col-lg-6 ${this.props.specify}`}>

                <div className="wrapper">

                    <h3 className="features-list-title">
                        {this.props.title}
                    </h3>

                    <p className="features-list-content">
                        {this.props.txt}
                    </p>

                </div>

            </li>
        );
    }
}

class FeaturesList extends Component {
    render() {
        return (
            <ul className="row features-list ">

                <FeaturesItem specify='design' title='Brilliant creative design'
                    txt="Ah, well! It means much the same thing, said the
                            Duchess, digging her  sharp little chin into Alice's
                              shoulder as she added, and the moral  of that is m-dash."/>

                <FeaturesItem specify='on-mouse' title='On mouse over title'
                    txt="Then they both bowed low, and their curls got entangled
                            together. Alice laughed so much at this, that she had
                            to run back into the wood for fear of their hearing her."/>

                <FeaturesItem specify='documentation' title='Incredible documentation'
                    txt="Alice went timidly up to the door, and knocked.
                            'There's no sort of use in knocking,' said the Footman,
                            'and that for two reasons."/>

                <FeaturesItem specify='responsive' title='Responsive & retina ready'
                    txt="Alice went timidly up to the door, and knocked.
                            'There's no sort of use in knocking,' said the Footman, '
                            and that for two reasons. First, because I'm on the same
                            side"/>

            </ul>
        );
    }
}

class Features extends Component {
    render() {
        return (
            <section className="features">

                <div className="container">

                    <h2 className="features-title text-center">
                        Superb features
                    </h2>

                    <FeaturesList/>

                </div>

            </section>
        );
    }
}

export default Features;