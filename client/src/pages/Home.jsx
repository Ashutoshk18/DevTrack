import React, { useEffect, useState } from "react";

import AddProblem from "../components/AddProblem";
import ProblemList from "../components/ProblemList";

const Home = () => {
  const [problems, setProblems] = useState([
    {
      title: "Two Sum",
      platform: "LeetCode",
      difficulty: "easy",
      solved: false,
    },
    {
      title: "3Sum",
      platform: "LeetCode",
      difficulty: "medium",
      solved: false,
    },
  ]); //It contains the problem array
  useEffect(() => {
    console.log(problems);
  }, [problems]);
  return (
    <>
      <AddProblem problems={problems} setProblems={setProblems} />
      <ProblemList problems={problems} setProblems={setProblems} />
    </>
  );
};

export default Home;
