  import { useEffect, useState } from "react";
  import AnimatedLetters from "../AnimatedLetters";
  import Canvas1 from "../Canvas/Canvas1";
  import "./skills.scss";
  import "./experience.scss";
  import SkillCard from "./SkillCard";
  import ExperienceCard from "./ExperienceCard";
  import experiences from "./job";

  const Skills = () => {
    const strArray = [
      "S",
      "k",
      "i",
      "l",
      "l",
      "s",
      "\xa0",
      "&",
      "\xa0",
      "E",
      "x",
      "p",
      "e",
      "r",
      "i",
      "e",
      "n",
      "c",
      "e",
    ];
    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
      const changeAnimationClass = () =>
        setTimeout(() => setLetterClass("text-animate-hover"), 5000);
      changeAnimationClass();
    }, []);

    return (
      <div className="container skills">
        <Canvas1 />

        <div className="top-container">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={strArray}
                idx={5}
              />
            </h1>

            <p>
              I have been working on different Software Development opportunities
              with{" "}
              <strong style={{ color: "#ffd000" }}>
                ReactJS, NodeJS, MongoDB{" "}
              </strong>
              being my main forte. I also have a good understanding of fundamental
              <strong style={{ color: "#ffd000" }}> Redux Saga</strong> and possess a
              sound knowledge in
              <strong style={{ color: "#ffd000" }}> Cybersecurity</strong>.
            </p>
          </div>

          <div className="skills-container">
            <SkillCard num={70} skill="HTML" />
            <SkillCard num={70} skill="CSS" />
            <SkillCard num={30} skill="Sass" />
            <SkillCard num={50} skill="JS" />
            <SkillCard num={50} skill="NodeJS" />
            <SkillCard num={80} skill="ReactJS" />
            <SkillCard num={70} skill="Bootstrap" />
            <SkillCard num={60} skill="SQL" />
            <SkillCard num={50} skill="MongoDB" />
            <SkillCard num={75} skill="GitHub" />
          </div>
        </div>

        <div className="experience-container">
          <ExperienceCard experience={experiences.SmountTech} />
          <ExperienceCard experience={experiences.ExcideLifeInsurance} />
        </div>
      </div>
    );
  };

  export default Skills;
