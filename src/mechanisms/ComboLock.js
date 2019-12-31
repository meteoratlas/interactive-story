import React from "react";
import { StoryContext } from "../util/StoryContext";
import Sub from "../components/Sub";

const ComboLock = props => {
  // props.desc is a descriptor for this lock; i.e. a "red" lock, the "topmost" lock, etc.
  const increment = () => {
    if (props.value > props.max) {
      props.updateState(props.min);
      return `You turn the knob, and the number on the ${props.desc} lock loops around back to ${props.min}`;
    }
    props.updateState(props.value + 1);
    return `You turn the knob, and the number on the ${props.desc} lock increases to ${props.value}`;
  };
  const decrement = () => {
    if (props.value < props.min) {
      props.updateState(props.max);
      return `You turn the knob, and the number on the ${props.desc} lock loops around back to ${props.max}`;
    }
    props.updateState(props.value - 1);
    return `You turn the knob, and the number on the ${props.desc} lock decreases to ${props.value}`;
  };
  return (
    <>
      <p>
        The {props.desc} lock currently reads {props.value}.{" "}
        <Sub c={increment}>Turn the dial right</Sub>
        <Sub c={decrement}>Turn the dial left</Sub>
      </p>
    </>
  );
};

export default ComboLock;
