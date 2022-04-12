import { useState, useRef } from "react";

export default function Skills({ info }) {
  const skills = info.spells;
  const passive = info.passive;
  const pasiveNameChamp = info.passive.image.full;
  const pasiveName = info.passive.name;
  const pasiveImg = `http://ddragon.leagueoflegends.com/cdn/12.6.1/img/passive/${pasiveNameChamp}`;

  const defaultSkillView = {
    name: passive.name,
    description: passive.description,
  };

  const [skillInfo, setSkillInfo] = useState(defaultSkillView);
  const targetSkill = useRef();

  const handleSkill = (skill, e) => {
    if (skill === defaultSkillView) {
      setSkillInfo(defaultSkillView);
      const skills = Object.values(targetSkill.current.children);
      skills.forEach((el) => {
        el.classList.remove("skill-target");
      });
      e.target.classList.add("skill-target");

      return;
    }
    const skills = Object.values(targetSkill.current.children);
    skills.forEach((el) => {
      el.classList.remove("skill-target");
    });

    e.target.classList.add("skill-target");
    const newSkillInfo = {
      name: skill.name,
      description: skill.description,
    };
    setSkillInfo(newSkillInfo);
  };

  return (
    <>
      <h2>Habilidades</h2>
      <div ref={targetSkill} className="skills-images">
        <figure
          className="skill-img skill-target"
          onClick={(e) => handleSkill(defaultSkillView, e)}>
          <img src={pasiveImg} alt="pasive" title={pasiveName} />
        </figure>
        {skills.map((skill) => (
          <figure
            onClick={(e) => handleSkill(skill, e)}
            key={skill.id}
            className="skill-img">
            <img
              src={`http://ddragon.leagueoflegends.com/cdn/12.6.1/img/spell/${skill.image.full}`}
              alt={skill.name}
              title={skill.name}
            />
          </figure>
        ))}
      </div>
      <div className="skills-info">
        <h3>{skillInfo.name}</h3>
        <p>{skillInfo.description}</p>
      </div>
    </>
  );
}
