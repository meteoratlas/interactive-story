import "./App.css";
import React, { Component } from "react";
import { AnimateOnChange } from "react-animation";
import Sub from "./components/Sub";
import Response from "./components/Response";
import Page from "./components/Page";
import Travel from "./components/Travel";
import Seaside from "./pages/Seaside";
import Shack from "./pages/Shack";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            interactText: "",
            animateResp: "",
            curPage: 0
        };
        this.pages = [
            <Seaside to={() => this.toPage(1)} />,
            <Shack to={() => this.toPage(0)} />
        ];
    }
    toPage = page => {
        this.setState({ curPage: page });
    };
    render() {
        return (
            <div className="App">
                <header className="App-header"></header>
                <AnimateOnChange>
                    <div id="wrapper">{this.pages[this.state.curPage]}</div>
                </AnimateOnChange>
            </div>
        );
    }
}

export default App;
