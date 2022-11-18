import "./widget.scss";

var Widget = function Widget() {
    return React.createElement(
        "div",
        { className: "widget" },
        React.createElement(
            "div",
            { className: "left" },
            "left"
        ),
        React.createElement(
            "div",
            { className: "right" },
            "right"
        )
    );
};

export default Widget;