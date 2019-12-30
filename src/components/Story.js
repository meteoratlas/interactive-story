import React, { useContext } from "react";
import { StoryContext } from "../util/StoryContext";
import { AnimateOnChange } from "react-animation";

const Story = () => {
    const [state, setState] = useContext(StoryContext);
    return (
        <div id="story-body">
            <AnimateOnChange>
                <div className="page">{state.page}</div>
            </AnimateOnChange>
        </div>
    );
};

export default Story;
