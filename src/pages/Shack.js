import React, { useState, useContext } from "react";
import { StoryContext } from "../util/StoryContext";
import Sub from "../components/Sub";
import Travel from "../components/Travel";
import Response from "../components/Response";
import { AnimateOnChange } from "react-animation";
import Seaside from "./Seaside";

const Shack = props => {
  const [state, setState] = useContext(StoryContext);
  const [interactText, setInteractText] = useState("");
  const lookGull = () => {
    setInteractText(
      "The gull's voice is faint, distant. The birds avoid this place."
    );
  };
  const lookRubble = () => {
    if (!state.inv["hasStone"]) {
      setState(prev => ({
        ...prev,
        inv: { ...prev.inv, hasStone: true }
      }));
      setInteractText(
        "You clear the rubble as best you can. Underneath, you find a small stone, its weight comforting in your hand. You decide to take it with you."
      );
    } else {
      setInteractText("You find nothing further of note.");
    }
  };
  return (
    <>
      <h2>Abandoned Shack</h2>
      <p>
        Dense pine boards scored by wind and sand, the humble shack lies
        situated atop a small outcropping of rocks overlooking the sea. Its roof
        is half-collapsed, and if anyone ever lived here they are gone now. The
        windows are painted with permanent haze and{" "}
        <Sub c={lookRubble}>a pile of rubble</Sub> sits adjacent, either a
        forgotten repair or the natural accumulation of debris that slowly
        engulfs any house. Somewhere in the distance, a{" "}
        <Sub c={lookGull}>gull</Sub> cries out. The path you trod to get here
        winds back down, inviting a{" "}
        <Travel to={() => setState(prev => ({ ...prev, page: <Seaside /> }))}>
          return to the shore.
        </Travel>
      </p>
      <AnimateOnChange>
        <Response text={interactText} />
      </AnimateOnChange>
    </>
  );
};

export default Shack;
