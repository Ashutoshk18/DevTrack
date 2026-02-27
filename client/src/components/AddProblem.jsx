import React, { useState } from "react";
import ProblemForm from "./ProblemForm";

const AddProblem = ({ problems, setProblems }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {isOpen && (
        <ProblemForm
          problems={problems}
          setProblems={setProblems}
          setIsOpen={setIsOpen}
        />
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="add-problem-button">
        {isOpen ? "X" : "+"}
      </button>
    </div>
  );
};

export default AddProblem;
