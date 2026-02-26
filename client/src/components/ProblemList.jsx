import React from "react";

const ProblemList = () => {
  return (
    <>
      <table className="problem-table">
        <thead>
          <th>Status</th>
          <th>Title</th>
          <th>Platform</th>
          <th>Difficulty</th>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>Two Sum</td>
            <td>LeetCode</td>
            <td>Medium</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ProblemList;
