import React from "react";
import ReactDOM  from "react-dom/client";
import "./main.scss";
import Body from './component/Body';
import Header from './component/Header';
import Footer from './component/Footer';

const App = ()=> {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);