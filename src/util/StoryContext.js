import React, { useState } from "react";
import Seaside from "../pages/Seaside";

const StoryContext = React.createContext([{}, () => {}]);

const StoryProvider = props => {
    const [state, setState] = useState({ page: <Seaside /> });
    return (
        <StoryContext.Provider value={[state, setState]}>
            {props.children}
        </StoryContext.Provider>
    );
};

export { StoryContext, StoryProvider };
