import React, { useContext } from "react";
import { StoryContext } from "../util/StoryContext";
import Travel from "../components/Travel";
import Seaside from "./Seaside";

const Intro = () => {
    const [state, setState] = useContext(StoryContext);
    return (
        <>
            <h2>Story Title</h2>
            <p>
                This is an interactive story by Kelly Horan, created using
                Javascript and React. Click on red links to investigate certain
                objects, and click green links to travel to another location.
                <Travel to={() => setState({ page: <Seaside /> })} t="Begin." />
            </p>
        </>
    );
};

export default Intro;
