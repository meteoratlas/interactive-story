import React, { useState, useContext } from "react";
import { StoryContext } from "../util/StoryContext";
import Sub from "../components/Sub";
import Travel from "../components/Travel";
import Response from "../components/Response";
import Shack from "./Shack";
import { AnimateOnChange } from "react-animation";

const Seaside = () => {
  const [state, setState] = useContext(StoryContext);
  const [interactText, setInteractText] = useState("");
  const lookSea = () => {
    setInteractText(
      "It is nearly frozen, hostile to the touch and extends forever into the horizon. If there's a way across, it is not obvious now."
    );
  };
  const lookSand = () => {
    setInteractText(
      "The sand is wet but has no weight; it gives too easily. Standing in one place makes you feel like you're sinking into the shore; you shift your feet carefully."
    );
  };
  return (
    <>
      <h2>The Seaside</h2>
      <p>
        The <Sub c={lookSea}>sea</Sub> stretches forever in front of you, a
        blanket of obsidian cold and forboding. You instinctively take a step
        back, <Sub c={lookSand}>sand</Sub> buckling under your shoes. A
        persistant wind urges you south, towards an{" "}
        <Travel to={() => setState(prev => ({ ...prev, page: <Shack /> }))}>
          abandoned shack.
        </Travel>
      </p>
      <AnimateOnChange>
        <Response text={interactText} />
      </AnimateOnChange>
    </>
  );
};

export default Seaside;
