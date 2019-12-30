import React from "react";

const Sub = props => {
    return (
        <React.Fragment>
            <span className="info-span" onClick={props.c}>
                {props.children}
            </span>
        </React.Fragment>
    );
};

export default Sub;
