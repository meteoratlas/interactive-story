import React, { useContext } from "react";
import { StoryContext } from "../util/StoryContext";
import { AnimateOnChange } from "react-animation";

const Story = () => {
    const [state, setState] = useContext(StoryContext);
    return (
        <div id="story-body">
            <div className="page">{state.page}</div>
        </div>
    );
};

export default Story;
