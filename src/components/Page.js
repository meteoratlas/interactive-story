import React from "react";

const Page = props => {
    return (
        <div className="page">
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    );
};

export default Page;
