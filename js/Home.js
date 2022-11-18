import React from 'react';
import "../css/home.scss";
import Widget from './components/widget/Widget';

var Home = function Home() {
    return React.createElement(
        'div',
        { className: 'home' },
        React.createElement(
            'div',
            { className: 'widgets' },
            React.createElement(Widget, null),
            React.createElement(Widget, null),
            React.createElement(Widget, null),
            React.createElement(Widget, null)
        )
    );
};

export default Home;