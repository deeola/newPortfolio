import React,{useState, useEffect} from "react";
import LeftProject from "./LeftProject";
import RightProject from "./RightProject";
import {
 
  ProjectContainer,
 
} from "./ProjectStyling";
import LoadingScreen from "../Shared/LoadingScreen";

const Project = () => {
  // Set loading state to true initially
const [loading, setLoading] = useState(true);
      
useEffect(() => {
  // Loading function to load data or 
  // fake it using setTimeout;
  const loadData = async () => {

    // Wait for two second
    await new Promise((r) => setTimeout(r, 1000));

    // Toggle loading state
    setLoading((loading) => !loading);
  };
    
  loadData();
}, [])

  return (

    loading ? <LoadingScreen /> : 
    <ProjectContainer>
      <LeftProject />
      <RightProject />
    </ProjectContainer>
  );
};

export default Project;

