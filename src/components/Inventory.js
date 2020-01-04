import React from "react";

const Inventory = props => {
  let invList = props.inv ? props.inv.map(i => <li>i</li>) : null;
  return (
    <div id="inventory">
      <p>Inventory:</p>
      <ul>{invList}</ul>
    </div>
  );
};

export default Inventory;
