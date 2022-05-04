import React, { useState, useEffect } from "react";
import LoadingScreen from "../Shared/LoadingScreen";
import { ContactContainer } from "./ContactStyling";
import LeftContact from "./LeftContact";
import RightContact from "./RightContact";

const Contact = () => {
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
  }, []);
  return loading ? (
    <LoadingScreen />
  ) : (
    <ContactContainer>
      <LeftContact />
      <RightContact />
    </ContactContainer>
  );
};

export default Contact;
