import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {
  id: 'heading',
  xyz: 'XYZ'
}, "Hello World from React");
// console.log(heading)

const parent = React.createElement("div", 
{
  id: 'parent'
}, [React.createElement("h1",{id: 'child'},"H1 TAG"), React.createElement("h2",{},"H2 TAG")]);
console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
