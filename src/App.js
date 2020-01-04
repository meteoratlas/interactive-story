import "./App.css";
import React from "react";
import { AnimateOnChange } from "react-animation";
import { StoryProvider } from "./util/StoryContext";
import Story from "./components/Story";
import Inventory from "./components/Inventory";

const App = () => {
  return (
    <StoryProvider>
      <div className="App">
        <header>
          <Inventory />
        </header>
        <AnimateOnChange>
          <Story />
        </AnimateOnChange>
      </div>
    </StoryProvider>
  );
};

export default App;
