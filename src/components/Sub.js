import React from "react";

const Sub = props => {
    return (
        <React.Fragment>
            <span className="info-span" onClick={props.c}>
                {props.t}
            </span>
            <span> </span>
        </React.Fragment>
    );
};

export default Sub;
