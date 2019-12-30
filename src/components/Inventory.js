import React from "react";

const Inventory = props => {
    let invList = this.props.inv.map(i => <li>i</li>);
    return (
        <div id="inventory">
            <p>Inventory:</p>
            <ul>{invList}</ul>
        </div>
    );
};

export default Inventory;
