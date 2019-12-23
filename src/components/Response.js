import React from "react";
const Response = props => {
    return (
        <React.Fragment>
            <div id="response-border"></div>
            <p id="response">{props.text} </p>
        </React.Fragment>
    );
};

export default Response;
