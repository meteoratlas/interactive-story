import React, { Component } from "react";
class Response extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <React.Fragment>
                <div id="response-border"></div>
                <p id="response">{this.props.text} </p>
            </React.Fragment>
        );
    }
}

export default Response;
