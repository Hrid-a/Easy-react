import React from "react";
import  ReactDOM from "react-dom/client";


// Functional Component
const name = <h2>Ahmed Hrid</h2>
const Header = ()=> {
    return (
        <div className="container">
            <h1 id="heading">This a Heading using JSX</h1>
            {name}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);