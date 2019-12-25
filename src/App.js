import "./App.css";
import React from "react";
import { AnimateOnChange } from "react-animation";
import Seaside from "./pages/Seaside";
import Shack from "./pages/Shack";
import { StoryProvider } from "./util/StoryContext";
import Story from "./components/Story";

const App = () => {
    return (
        <StoryProvider>
            <div className="App">
                <header className="App-header"></header>
                <AnimateOnChange>
                    <Story />
                </AnimateOnChange>
            </div>
        </StoryProvider>
    );
};

export default App;
