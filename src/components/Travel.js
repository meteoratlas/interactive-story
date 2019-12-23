import React from "react";

const Travel = props => {
    return (
        <React.Fragment>
            <span className="travel-span" onClick={props.to}>
                {props.t}
            </span>
            <span> </span>
        </React.Fragment>
    );
};

export default Travel;
