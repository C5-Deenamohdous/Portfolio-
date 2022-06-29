import "./style.css"
import { useRef, useEffect } from "react";
import TagCloud from "TagCloud";


const allSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Node.js",
  "MySQL",
  "MongoDB",
  "Express.js",
  "React.js",
  "Redux",
  "Git",
  "jQuery",
];

const Home = () => {
  const IsTagCloudLoaded = useRef(false);
  const skills = () => {
    // const options = {};
    TagCloud(".content", allSkills, {
      radius: 250,
      maxSpeed: "fast",
      initSpeed: "fast",
      direction: 135,
      keep: true,
    });
  };

  // TagCloud(container, allSkills, options)

  useEffect(() => {
    // if (IsTagCloudLoaded.current) {
      skills();
    // }
    IsTagCloudLoaded.current = true;
  }, []);

  return (
    <div class="row full-width">
      {/* <div class="col">Column</div> */}
      <div class="col">
        <div className="content" />
      </div>
    </div>
  );
};

export default Home;
