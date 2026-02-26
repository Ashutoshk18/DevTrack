import React from "react";

const ProblemForm = () => {
  return (
    <>
      <div className="form-box">
        <p>Add a new question</p>
        <form>
          <div className="field-group">
            <label for="title">Problem Title:</label>
            <input
              type="text"
              id="title"
              placeholder="Enter the problem title"
            />
          </div>

          <div className="field-group">
            <label for="platform">Platform: </label>
            <select name="platform" id="platform">
              <option value="none" disabled selected className="options">
                Select platform
              </option>

              <option value="codeforces">Codeforces</option>
              <option value="leetcode">LeetCode</option>
              <option value="cses">CSES</option>
            </select>
          </div>
          <div className="field-group">
            <label for="Difficulty">Difficulty</label>
            <select name="difficulty" id="difficulty">
              <option value="none" disabled selected>
                Select difficulty
              </option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="button-group">
            <button className="submit-button button">Add Problem</button>
            <button className="clear-button button" type="reset">
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProblemForm;
