import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import  Greet from "./components/Greet";
import ParentComponent from "./components/ParentComponent";
import Welcome from "./components/Welcome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
        <ParentComponent />
        {/* </Welcome> */}
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;
