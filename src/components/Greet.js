//Functional Component
import React from "react";

function Greet(props) {
  const img = "https://picsum.photos/1200/300";
  // let num=  Math.floor(Math.random()*2);
  function clickHandler() {
    document.getElementById("cImage").src =
      "https://picsum.photos/1200/300?random=" +
      Math.floor(Math.random() * 100);
  }
  // num=0;

  const picturestyle = {
    border: "3px solid black",
  };
  const h1style = {
    color: "indianred",
  };
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  var greeting = "";
  var merid;
  if (hour < 12) {
    greeting = "Good Morning";
    h1style.color = "seagreen";
    merid = "am";
  } else if (hour >= 12) {
    greeting = "Good Evening";
    h1style.color = "burlywood";
    merid = "pm";
  } else {
    greeting = "Good Night";
    h1style.color = "skyblue";
    merid = "pm";
  }

  return (
    <div style={{ backgroundColor: "bisque" }}>
      <br />
      <br />
      <img src={img} alt="randompicture" style={picturestyle} id="cImage"></img>
      {/* <img src={img} alt="randompicture" style={picturestyle}></img>
      <img src={img} alt="randompicture" style={picturestyle}></img>
      <img src={img} alt="randompicture" style={picturestyle}></img> */}
      <h1 style={h1style}>
        {" "}
        {greeting} it's {hour}: {minute} {merid}
      </h1>
      <button className="btn" onClick={clickHandler}>
        <h3>You can Click Me</h3>
      </button>
    </div>
  );
}

export default Greet;
