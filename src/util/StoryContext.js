import React, { useState } from "react";
import Seaside from "../pages/Seaside";
import Intro from "../pages/Intro";

const StoryContext = React.createContext([{}, () => {}]);

const StoryProvider = props => {
  const [state, setState] = useState({
    page: <Intro />,
    inv: {}
  });
  return (
    <StoryContext.Provider value={[state, setState]}>
      {props.children}
    </StoryContext.Provider>
  );
};

export { StoryContext, StoryProvider };
