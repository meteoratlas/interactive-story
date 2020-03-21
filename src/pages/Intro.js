import React, { useContext } from "react";
import { StoryContext } from "../util/StoryContext";
import Travel from "../components/Travel";
import Seaside from "./Seaside";

const Intro = () => {
  const [, setState] = useContext(StoryContext);
  return (
    <>
      <h2>Interactive Story</h2>
      <p>
        This is an interactive story by Kelly Horan, created using Javascript
        and React. Click on red links to investigate certain objects, and click
        green links to travel to another location.
      </p>
      <p>
        Please note this story is a work in progress; you can explore the
        island, but there is currently no win condition.
      </p>
      <p>
        <Travel to={() => setState(prev => ({ ...prev, page: <Seaside /> }))}>
          Begin.
        </Travel>
      </p>
    </>
  );
};

export default Intro;
