import React, { useState } from "react";
import ProblemForm from "./ProblemForm";

const AddProblem = ({ problems, setProblems }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`box-form-container ${isOpen ? "box-is-open" : ""}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="toggle-button">
        <span className={`symbol plus ${isOpen ? "hidden" : ""}`}>+</span>
        <span className={`symbol cross ${isOpen ? "" : "hidden"}`}>X</span>
      </button>
      <ProblemForm
        problems={problems}
        setProblems={setProblems}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default AddProblem;
