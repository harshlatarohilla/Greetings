//Class Component
import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
     
    this.state = {
      message: "Welcome gogo",
    };
    this.customStyle={
        color:"red"
      }
    // this.clickHandler=this.clickHandler.bind(this);
  }
  
  clickHandler=()=> {
    this.setState({
        message:'We Welcome You'
    })
    
    console.log(this);
  }
  render() {
    return (
      <div  style={{backgroundColor:"bisque"}}>
        <h1 className="head" style={this.customStyle}>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler.bind(this)}> <h1>Click me</h1> </button> */}
        {/* <button onClick={()=>this.clickHandler()} > <h1>Click me</h1> </button> */}
        <button onClick={this.clickHandler} className="btn" > <h1>Click me for a welcome message</h1> </button>
      </div>
    );
  }
}

export default Welcome;
