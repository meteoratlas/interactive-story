import React, { useState, useContext } from "react";
import useInterval from "../hooks/useInterval";
import { AnimateOnChange } from "react-animation";

/* A span element that alternates between the values defined by the passed array
Usage:        <TSense
          speed={1500}
          items={["disappointed", "upbeat", "melancholy", "hungry"]}
        />*/

const TSense = props => {
  const [index, setIndex] = useState(0);
  const next = () => {
    setIndex(p => {
      return (p += 1);
    });
    if (index >= props.items.length - 1) {
      setIndex(0);
    }
  };
  useInterval(() => {
    next();
  }, props.speed);
  return <AnimateOnChange>{props.items[index]}</AnimateOnChange>;
};

export default TSense;
