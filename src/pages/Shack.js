import React, { Component } from "react";
import Sub from "../components/Sub";
import Travel from "../components/Travel";
import Response from "../components/Response";
import { AnimateOnChange } from "react-animation";

class Shack extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    testCallback = str => {
        this.setState({
            interactText:
                "The gull's voice is faint, distant. The birds avoid this place."
        });
    };
    testCallback2 = str => {
        this.setState({
            interactText: "You take another look, but find nothing of value."
        });
    };
    render() {
        return (
            <div id="story-body">
                <div className="page">
                    <h2>Abandoned Shack</h2>
                    <p>
                        Dense pine boards scored by wind and sand, the humble
                        shack lies situated atop a small outcropping of rocks
                        overlooking the sea. Its roof is half-collapsed, and if
                        anyone ever lived here they are gone now. The windows
                        are painted with permanent haze and
                        <Sub t="a pile of rubble" c={this.testCallback2} /> sits
                        adjacent, either a forgotten repair or the natural
                        accumulation of debris that slowly engulfs any house.
                        Somewhere in the distance, a{" "}
                        <Sub t="gull" c={this.testCallback}></Sub>cries out. The
                        path you trod to get here winds back down, inviting a{" "}
                        <Travel to={this.props.to} t="return to the shore." />
                    </p>
                </div>
                <AnimateOnChange>
                    <Response
                        className={this.state.animateResp}
                        text={this.state.interactText}
                    />
                </AnimateOnChange>
            </div>
        );
    }
}

export default Shack;
