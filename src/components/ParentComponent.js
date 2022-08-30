import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Parent",
      names: "dog",
    };
    this.greetparent = this.greetparent.bind(this);
  }

  greetparent(childName) {
    this.setState({
      message: "Salut",
      names: childName,
    });
  }
  render() {
    return (
      <div>
        
        <ChildComponent
          messageHandler={this.state.message}
          greetHandler={this.greetparent}
          
          
        />
        {this.state.names}
      </div>
    );
  }
}

export default ParentComponent;
