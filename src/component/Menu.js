import { useParams } from "react-router-dom";

const Menu = ()=> {
    
    const {resid}= useParams();
    return (
        <div className="container" style={{minHeight:"70svh"}}>
            <h1>Menu</h1>
            <h2>The restaurant id is: {resid} </h2>
        </div>
    )
}

export default Menu;