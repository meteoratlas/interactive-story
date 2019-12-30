import React, { Component } from "react";
import Sub from "../components/Sub";
import Travel from "../components/Travel";
import Response from "../components/Response";
import Shack from "./Shack";
import { AnimateOnChange } from "react-animation";

class Seaside extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    testCallback = str => {
        this.setState({
            interactText:
                "The sand is cold, and gives too easily. Standing in one place makes you feel like you're sinking into the shore; you shift your feet carefully."
        });
    };
    testCallback2 = str => {
        this.setState({
            interactText:
                "It is cold, hostile to the touch and extends forever into the horizon. If there's a way across, it is not obvious now."
        });
    };
    render() {
        return (
            <>
                <h2>The Seaside</h2>
                <p>
                    The <Sub t="sea" c={this.testCallback2} /> stretches forever
                    in front of you, a blanket of obsidian cold and forboding.
                    You instinctively take a step back,{" "}
                    <Sub t="sand" c={this.testCallback} />
                    buckling under your shoes. A persistant wind urges you
                    south, towards an{" "}
                    <Travel to={this.props.to} t="abandoned shack." />
                </p>
                <AnimateOnChange>
                    <Response
                        className={this.state.animateResp}
                        text={this.state.interactText}
                    />
                </AnimateOnChange>
            </>
        );
    }
}

export default Seaside;
