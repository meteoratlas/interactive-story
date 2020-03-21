import React, { useState, useContext } from "react";
import { StoryContext } from "../util/StoryContext";
import Sub from "../components/Sub";
import Travel from "../components/Travel";
import Response from "../components/Response";

const Shell = () => {
  const [state, setState] = useContext(StoryContext);
  const [interactText, setInteractText] = useState("");
  const lookPillar = () => {
    setInteractText(
      "About eight feet tall, made of pale, porous rock. Ants with bulbous, mercury-red bodies crawl in and out of the holes in the stone. There is no obvious way to disturb it."
    );
  };
  const lookWall = () => {
    setInteractText(
      "Broad brush strokes of ochre and crimson tower above, curving from the seaside into the forest behind. The wall is almost unnaturally smooth, but, far above, a handful of emaciated branches and cacti protrude from the stone. There are traces of long abandoned bird nests in each."
    );
  };
  const lookConch = () => {
    setInteractText(
      "The shell is the size of a room, its geometry a bricolage of curves and tempered spines. Its brilliant hues, spectacular as they are, almost vanish the equal colours of the canyon. The surface is bumpy, but gently crumbles into dust as your fingers run over it. You pull back your hand to avoid further damage."
    );
  };
  return (
    <>
      <h2>The Shell</h2>
      <p>
        A narrow gap in the trees leads to a giant{" "}
        <Sub c={lookConch}>conch shell</Sub>, nested gently by a nearby{" "}
        <Sub c={lookWall}>canyon wall</Sub>. The silhouette of the shell blends
        almost completely into the strata of the wall, betrayed only by the pink
        luminescent sparkles that shimmer in the shadow of the canyon like
        nearby stars. The opening to the shell is covered by a{" "}
        <Sub c={lookPillar}>pillar of stone</Sub>.
      </p>
      <AnimateOnChange>
        <Response text={interactText} />
      </AnimateOnChange>
    </>
  );
};

export default Shell;
