import React, { useState } from "react";

const ProblemList = ({ problems, setProblems }) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkboxHandler = (index) => {
    setIsChecked((prev) => !prev);
    setProblems((prevProblems) =>
      prevProblems.map((prob, idx) =>
        idx === index ? { ...prob, solved: !prob.solved } : prob,
      ),
    );
  };

  const removeProblem = (index) => {
    setProblems((prevProblems) =>
      prevProblems.filter((_, idx) => idx !== index),
    );
  };
  return (
    <>
      <table className="problem-table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Title</th>
            <th>Platform</th>
            <th>Difficulty</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {problems.map((problem, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: problem.solved ? "#e6fffa" : "transparent",
                textDecorationLine: problem.solved ? "line-through" : "",
              }}
            >
              <td>
                <input
                  type="checkbox"
                  onChange={() => checkboxHandler(index)}
                  checked={problem.solved}
                />
              </td>
              <td>{problem.title}</td>
              <td>{problem.platform}</td>
              <td className={`${problem.difficulty} problem-difficulty`}>
                {problem.difficulty}
              </td>
              <td>
                <button onClick={() => removeProblem(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ProblemList;
