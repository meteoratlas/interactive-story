import React, { useState, useContext } from "react";
import { StoryContext } from "../util/StoryContext";
import Sub from "../components/Sub";
import Travel from "../components/Travel";
import Response from "../components/Response";
import { AnimateOnChange } from "react-animation";
import Seaside from "./Seaside";

const Floodgate = () => {
  const [state, setState] = useContext(StoryContext);
  const [interactText, setInteractText] = useState("");
  const lookWall = () => {
    setInteractText(
      <span>
        The wall reaches about thirty feet high. The scored surface and blotches
        of drained colour imply that waves from the sea once stretched to this
        wall, but that hardly seems possible now. Despite the marked surface,
        there are no handholds to safely climb. You don't see an end to the wall
        in either direction, even after a few minutes of walking; it must{" "}
        <Sub c={encloseAll}>enclose the whole island</Sub>.
      </span>
    );
  };
  const encloseAll = () => {
    setInteractText(prev => (
      <span>
        You knew this was the case, of course. It's different seeing it in
        person, the lengths some go to simply to isolate themselves.
      </span>
    ));
  };
  const raiseGate = () => {
    setInteractText(
      "You search for many minutes, but find no mechanism to operate the enormous gears that lock the gate closed. Perhaps you need to look elsewhere on the island."
    );
  };
  const lookTrees = () => {
    setInteractText(
      "Faint fronds of green wave over the wall, as if taunting you. The trees that hold them must be absurdly tall."
    );
  };
  return (
    <>
      <h1>The Floodgate ({state.inv["floodgateOpen"] ? "Open" : "Closed"})</h1>
      <p>
        Before you lies a massive floodgate. On each side, a long{" "}
        <Sub c={lookWall}>perimeter wall</Sub> of concrete cuts off access to
        the rest of the island, only the crowns of nearby{" "}
        <Sub c={lookTrees}>palm trees</Sub> peeking over. If you want to reach
        the inside of the island, you will need to{" "}
        <Sub c={raiseGate}>raise the gate</Sub>. You can also{" "}
        <Travel to={() => setState(prev => ({ ...prev, page: <Seaside /> }))}>
          head west, back to the shore
        </Travel>
        .
      </p>
      <AnimateOnChange>
        <Response text={interactText} />
      </AnimateOnChange>
    </>
  );
};

export default Floodgate;
