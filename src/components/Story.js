import React, { useContext } from "react";
import { StoryContext } from "../util/StoryContext";
import { AnimateOnChange } from "react-animation";

const Story = () => {
    const [state, setState] = useContext(StoryContext);
    return (
        <div id="story-body">
            <div className="page">
                <h2>Title</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum tincidunt, tellus at rhoncus elementum, lorem sem
                    mollis metus, eu eleifend ex odio a ante. Mauris scelerisque
                    nibh sit amet aliquet molestie. Quisque lobortis est quis
                    enim pharetra, sit amet vulputate justo finibus. Aliquam
                    dignissim purus sapien, a imperdiet mi venenatis porta. Sed
                    vitae ex iaculis, volutpat nunc euismod, cursus ex. Proin
                    dictum eget arcu et porttitor. Mauris congue sem nulla, id
                    convallis dolor blandit sit amet. Sed sed fermentum nisl.
                </p>
            </div>
        </div>
    );
};

export default Story;
