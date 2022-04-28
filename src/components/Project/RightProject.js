import React, { useContext } from "react";
import PortfolioContext from "../../context/portfolioContext";
import AllProjects from "./Allprojects";
import { v4 as uuidv4 } from "uuid";

const RightProject = () => {
  const portfolioContext = useContext(PortfolioContext);
  const { setProjectNext, setProjectPrev, currents } = portfolioContext;

  return (
    <div>
      {AllProjects.map((project) =>
        project.key === currents + 1 ? (
          <div key={uuidv4()}>
            <img src={project.img} alt="img" />
          </div>
        ) : (
          ""
        )
      )}

      <>
        <button onClick={setProjectNext}>Next</button>
        <button onClick={setProjectPrev}>Prev</button>
      </>
    </div>
  );
};

export default RightProject;
