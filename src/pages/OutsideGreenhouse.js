import React, { useState, useContext } from "react";
import { StoryContext } from "../util/StoryContext";
import Sub from "../components/Sub";
import Travel from "../components/Travel";
import Response from "../components/Response";
import { AnimateOnChange } from "react-animation";
import Grove from "./Grove";
import Greenhouse from "./Greenhouse";

const OutsideGreenhouse = props => {
  const [state, setState] = useContext(StoryContext);
  const [interactText, setInteractText] = useState("");
  const lookHouse = () => {
    setInteractText(
      "The windows of the greenhouse are largely obscured by dust and grime, but you see greenery though the muck."
    );
  };
  const lookMachine = () => {
    setInteractText(
      "The size of a large vehicle, a deep roar comes from inside its shaking carapice. It is covered in miscoloured sheets of corregated metal, as it pieces of it have been replaced over time. A small control panel sits attached to its side."
    );
  };
  return (
    <>
      <h2>Outside The Greenhouse</h2>
      <p>
        In the middle of the a small, sunny field sits a{" "}
        <Sub c={lookHouse}>greenhouse</Sub>, its{" "}
        <Travel
          to={() => setState(prev => ({ ...prev, page: <Greenhouse /> }))}
        >
          door
        </Travel>{" "}
        sitting open. Beside it resides a{" "}
        <Sub c={lookMachine}>massive machine</Sub>, emitting a deep mechanical
        hum. The{" "}
        <Travel to={() => setState(prev => ({ ...prev, page: <Grove /> }))}>
          way back to the grove
        </Travel>{" "}
        winds between the trees.
      </p>
      <AnimateOnChange>
        <Response text={interactText} />
      </AnimateOnChange>
    </>
  );
};

export default OutsideGreenhouse;
