import React, { Component } from "react";
 
class Assess extends Component {
  render() {
    return (
      <div>
          <h1>How We Assessment Submissions</h1>
          <p>This is a creative assignment, with no specific right or wrong answer. How will we grade it? Here's what we'll look for.</p>
          <ul>
              <li>
                  <p>Metric List and Values</p>
                  <span>You can select metrics, it loads from the API. When selected, the values auto update</span>
              </li>
          </ul>
      </div>
    );
  }
}
 
export default Assess;