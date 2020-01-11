import React, { useState, useContext } from "react";
import { StoryContext } from "../util/StoryContext";
import Sub from "../components/Sub";
import Travel from "../components/Travel";
import Response from "../components/Response";
import { AnimateOnChange } from "react-animation";
import InsideShack from "./InsideShack";
import Seaside from "./Seaside";

const Shack = props => {
  const [state, setState] = useContext(StoryContext);
  const [interactText, setInteractText] = useState("");
  const lookGull = () => {
    setInteractText(
      "The gull's voice is faint, distant. The birds avoid this place."
    );
  };

  const lookDoor = () => {
    if (state.inv["hasStone"] && !state.inv["shackOpen"]) {
      setState(prev => ({
        ...prev,
        inv: { ...prev.inv, shackOpen: true }
      }));
      setInteractText(
        "With only a moment of hesitation, you throw the rock through the door's window, shattering it. You reach inside and open the lock, and the door slowly drifts open."
      );
    } else {
      setInteractText(
        "The door is heavy, and it refuses to open. Through the small diamond-shaped window, you can see the deadbolt locked in place. Perhaps if you could break the window..."
      );
    }
  };
  const shackStatus = () => {
    return state.inv["shackOpen"] ? (
      <span>
        The door{" "}
        <Travel
          to={() => setState(prev => ({ ...prev, page: <InsideShack /> }))}
        >
          into the shack
        </Travel>{" "}
        sits open, bobbing slightly in the wind.
      </span>
    ) : (
      <span>
        The <Sub c={lookDoor}>door to the shack</Sub> is closed, and has clearly
        not been open in quite some time.
      </span>
    );
  };
  return (
    <>
      <h2>Abandoned Shack</h2>
      <p>
        Dense pine boards scored by wind and sand, the humble shack lies
        situated atop a small outcropping of rocks overlooking the sea. Its roof
        is half-collapsed, and if anyone ever lived here they are gone now. The
        windows are painted with permanent haze, and the walls with cracked red
        paint. {shackStatus()} Somewhere in the distance, a{" "}
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
