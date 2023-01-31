import React from "react";
import Typewriter from "typewriter-effect";
import "./Typewriter.css";

const TypeEffect = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "React Engineer",
          "Angular developer",
          "Node JS engineer",
          "Linux expert",
          "Next JS engineer",
          "Android Developer",
          "Team Lead",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default TypeEffect;
