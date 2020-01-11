import React, { useState, useContext } from "react";
import { StoryContext } from "../util/StoryContext";
import Sub from "../components/Sub";
import Travel from "../components/Travel";
import Response from "../components/Response";
import { AnimateOnChange } from "react-animation";
import Shack from "./Shack";

const InsideShack = () => {
  const [, setState] = useContext(StoryContext);
  const [interactText, setInteractText] = useState("");
  const lookPhoto = () => {
    setInteractText(
      "Beneath the foggy glass is a black and white portrait of a young woman. Her expression is blank, and she sits under a blanket of a dress in a studio of some kind. The condition of the photo and her clothing imply that it was taken a long time ago. You don't recognize her."
    );
  };
  const lookKnacks = () => {
    setInteractText(
      "A small collection of handmade wooden toys - tops, rocking horses, and dolls. They are well made, but a handful of imperfections imply their creator was not a master of his craft. None of them seem immediately useful."
    );
  };
  const lookBed = () => {
    setInteractText(
      "Queen-sized, and nestled snug against the wall. The sheets are a blue and white plaid, faded, and the bed is neatly made. The single pillow at the head is leaking feathers onto the floor below. There doesn't seem to be anything under it."
    );
  };
  return (
    <>
      <h2>Inside the Abandoned Shack</h2>
      <p>
        The air is stale and still, and despite the long-abandoned state of the
        shack it has an intangible sensation of comfort. It is a single room,
        containing only a desk and a <Sub c={lookBed}>bed</Sub>. Cobwebs litter
        the corners of the ceiling, and dust lines each surface. On a desk below
        a window sits a <Sub c={lookPhoto}>framed photograph</Sub> and a few
        assorted <Sub c={lookKnacks}>knick-knacks</Sub>. The door leads{" "}
        <Travel to={() => setState(prev => ({ ...prev, page: <Shack /> }))}>
          {" "}
          back out to the beach.
        </Travel>
      </p>
      <AnimateOnChange>
        <Response text={interactText} />
      </AnimateOnChange>
    </>
  );
};

export default InsideShack;
