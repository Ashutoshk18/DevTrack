import React, { useState } from "react";
import ProblemForm from "./ProblemForm";

const AddProblem = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {isOpen && <ProblemForm />}
      <button onClick={() => setIsOpen(!isOpen)} className="add-problem-button">
        {isOpen ? "X" : "+"}
      </button>
    </div>
  );
};

export default AddProblem;
