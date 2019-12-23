import React, { Component } from 'react';
class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        let invList = this.props.inv.map(i => <li>i</li>)
        return ( <div id="inventory"><p>Inventory:</p>
            <ul>{invList}</ul></div>
        )
    }
}
 
import React, { Component } from 'reathis.props.inv.map(

)ct';
export default Inventory;