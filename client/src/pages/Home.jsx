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
    <div className="container">
      <header className="header-style">
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          DevTracker - DSA Problem Tracker
        </h1>
      </header>
      <main className="main-content">
        <div className="table-container">
          <ProblemList problems={problems} setProblems={setProblems} />
        </div>
      </main>
      <aside className="sidebar">
        <div className="stats-style"></div>
        <div className="add-problem-style">
          <AddProblem problems={problems} setProblems={setProblems} />
        </div>
      </aside>
      <footer>
        <p style={{ display: "flex", justifyContent: "center" }}>
          &copy; 2026 DevTracker{" "}
        </p>
      </footer>
    </div>
  );
};

export default Home;
