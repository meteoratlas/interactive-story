import React, { useState, useContext } from "react";
import { StoryContext } from "../util/StoryContext";
import Sub from "../components/Sub";
import Travel from "../components/Travel";
import Response from "../components/Response";
import { AnimateOnChange } from "react-animation";
import OutsideGreenhouse from "./OutsideGreenhouse";

const Greenhouse = props => {
  const [state, setState] = useContext(StoryContext);
  const [interactText, setInteractText] = useState("");
  const lookMist = () => {
    setInteractText(
      "You trace the pipes that lead into them - it looks like they draw water from the nearby river."
    );
  };
  return (
    <>
      <h2>The Greenhouse</h2>
      <p>
        The air is thick and humid inside, sunlight trapped inside the foggy
        windows that make up its walls and ceiling. From above, an array of{" "}
        <Sub c={lookMist}>evenly-spaced rods gently mist water</Sub> onto the
        flora below. The{" "}
        <Travel
          to={() =>
            setState(prev => ({ ...prev, page: <OutsideGreenhouse /> }))
          }
        >
          door back outside
        </Travel>{" "}
        creaks slightly as it moves with the wind.
      </p>
      <AnimateOnChange>
        <Response text={interactText} />
      </AnimateOnChange>
    </>
  );
};

export default Greenhouse;
