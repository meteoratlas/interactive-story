import React, { useState, useContext } from "react";
import { StoryContext } from "../util/StoryContext";
import Sub from "../components/Sub";
import Travel from "../components/Travel";
import Response from "../components/Response";
import { AnimateOnChange } from "react-animation";
import TSense from "../mechanisms/TSense";
import Shack from "./Shack";

const Grove = () => {
  const [state, setState] = useContext(StoryContext);
  const [interactText, setInteractText] = useState("");
  const lookStones = () => {
    setInteractText(
      "The stones are perhaps a pound or two each, and number around 40. They seem to consist of all types of rock, but most seem to be limestone. The deliberateness behind their placement implies a certain mysticism that you cannot fathom."
    );
  };
  const lookTree = () => {
    setInteractText(
      "A redwood that stretches far beyond the rest of the forest, more like a mountain than a plant. Even its jagged, rough bark feels like a strata of wood. It would be too difficult to climb barehanded, but it might be managable with proper equipment."
    );
  };
  return (
    <>
      <h2>The Forest Grove</h2>
      <p>
        The trees part, revealing a small clearing in the middle of the forest.
        In the centre, a <Sub c={lookStones}>ring of stones</Sub> circles a{" "}
        <Sub c={lookTree}>tree taller than the rest</Sub>. The wind{" "}
        <TSense
          speed={2000}
          items={["echoes", "murmurs", "whistles", "breezes"]}
        />{" "}
        through the trees. Otherwise, the only notable feature is the path,
        which spreads from one road into many. The path splits in four
        directions:
      </p>
      <ul>
        <li>
          <Travel>Forward, towards the foot of the mountain</Travel>
        </li>
        <li>
          <Travel>West, towards the sound of a mechanical hum</Travel>
        </li>
        <li>
          <Travel>East, deeper into the forest</Travel>
        </li>
        <li>
          <Travel>Back to towards the beach</Travel>
        </li>
      </ul>
      <AnimateOnChange>
        <Response text={interactText} />
      </AnimateOnChange>
    </>
  );
};

export default Grove;
