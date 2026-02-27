import React, { useEffect, useState } from "react";

const ProblemForm = ({ problems, setProblems, setIsOpen }) => {
  const [formData, setFormData] = useState({
    title: "",
    platform: "",
    difficulty: "",
    solved: false,
  });
  //Change Handler
  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  //Clear Form Data
  const clearForm = (event) => {
    event.preventDefault();
    setFormData({ title: "", platform: "", difficulty: "" });
  };

  //submitHandler
  const submitHandler = (event) => {
    event.preventDefault();
    setProblems((prevData) => [...prevData, formData]);
    setIsOpen(false);
    //Clearing the form after adding.
    setFormData({ title: "", platform: "", difficulty: "" });
  };

  // useEffect(() => {
  //   console.log(formData);
  // }, [formData]);

  return (
    <>
      <div className="form-content">
        <p>Add a new question</p>
        <form onSubmit={submitHandler}>
          <div className="field-group">
            <label for="title">
              Problem Title:{" "}
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Enter the problem title"
                value={formData.title}
                onChange={changeHandler}
              />
            </label>
          </div>

          <div className="field-group">
            <label for="platform">
              Platform:{" "}
              <select
                name="platform"
                id="platform"
                value={formData.platform}
                onChange={changeHandler}
              >
                <option value="" disabled>
                  Select platform
                </option>

                <option value="codeforces">Codeforces</option>
                <option value="leetcode">LeetCode</option>
                <option value="cses">CSES</option>
              </select>
            </label>
          </div>
          <div className="field-group">
            <label for="Difficulty">
              Difficulty{" "}
              <select
                name="difficulty"
                id="difficulty"
                value={formData.difficulty}
                onChange={changeHandler}
              >
                <option value="" disabled>
                  Select difficulty
                </option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>
          </div>
          <div className="button-group">
            <button type="submit" className="submit-button button">
              Add Problem
            </button>
            <button
              className="clear-button button"
              type="reset"
              onClick={clearForm}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProblemForm;
