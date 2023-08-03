import React from 'react';
import ReactDOM from 'react-dom/client';
// This how devs used to create react Element 
const heading1 = React.createElement("h1", {id:"head"}, "This a JS Object");

// here's how to create react Element using JSX due to Babel who made this possible
const heading = <h1>This not an html code nor JavaScript Code this JSX code</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);