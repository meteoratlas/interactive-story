import React, { useState } from "react";
import Seaside from "../pages/Seaside";
import Grove from "../pages/Grove";
import Intro from "../pages/Intro";
import Floodgate from "../pages/Floodgate";

const StoryContext = React.createContext([{}, () => {}]);

const StoryProvider = props => {
  const [state, setState] = useState({
    page: <Seaside />,
    inv: {}
  });
  return (
    <StoryContext.Provider value={[state, setState]}>
      {props.children}
    </StoryContext.Provider>
  );
};

export { StoryContext, StoryProvider };
