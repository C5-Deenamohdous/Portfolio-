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
        <div className="skillsPargraph">
          <h3>Skills and Technologies</h3>
          <p>Since beginning my journey as a full-stack developer, I have learned from scratch starting with Javascript language which I have created successful website that are fast and easy to use using these technologies HTML, CSS, JQuery, NodeJs, ReactJs, Redux, Mysql, MongoDB,Visit my LinkedIn profile for more details.</p>
        </div>
        <div className="content" />
      </div>
    </div>
  );
};

export default Home;
