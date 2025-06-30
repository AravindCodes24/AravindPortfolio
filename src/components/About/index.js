import { useEffect, useState } from "react";
import "./index.scss";
import Canvas1 from "../Canvas/Canvas1";
import AnimatedLetters from "../AnimatedLetters";
import StageCube from "../StageCube";

const About = () => {
  const strArray = ["A", "b", "o", "u", "t", "\xa0", "M", "e"];
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const changeAnimationClass = () => {
      setTimeout(() => {
        setLetterClass("text-animate-hover");
      }, 3000);
    };

    changeAnimationClass();
  }, []);

  return (
    <div className="container about">
      <Canvas1 />

      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={strArray}
            idx={5}
          />
        </h1>

        <p>
          Hailing from
          <strong style={{ color: "#ffd700" }}> India</strong>, I’m a software
          developer who loves turning ideas into interactive, real-world
          applications.
        </p>

        <p>
          I am looking for a role in an established IT company with the
          opportunity to work with the latest technologies on challenging and
          diverse projects.
        </p>
        <p>
          I'm naturally curious, and perpetually working on improving my chops
          on design and problems one at a time.
        </p>
        <p>
          I love working on side projects that explore real-world solutions
          using modern tools like React, Node.js, MongoDb and AI-powered services.
        </p>
        <p>
          Visit my{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/aravindrathinavelu"
          >
            LinkedIn
          </a>{" "}
          or{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/AravindCodes24"
          >
            Github
          </a>{" "}
          profile to know more.
        </p>
      </div>

      <StageCube />
    </div>
  );
};

export default About;
