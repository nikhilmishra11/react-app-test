import React, { Component } from "react";
 
class GetStarted extends Component {
  render() {
    return (
      <div>
        <p>We created a CLI and a starter project all bootstrapped up for you. Run the following CLI to get started.
      npx eog-react-visualization-cli create 
      
      For example, if you enter "yourname" the CLI will create a directory named "yourname-react-visualization" Then:
      cd yourname-react-visualization 
      yarn install
      yarn start
      
      Complete your visualization. You will probably want to view the API Documentation.
      Then, when you are ready:
      </p>
      </div>
    );
  }
}
 
export default GetStarted;