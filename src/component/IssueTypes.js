import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const IssueTypes = ()=> {
    const [issueTypes, setIssuesTypes] = useState([]);
    const [activeId, setActiveId] = useState("partner-onboarding");
    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async()=> {
        const response = await fetch("https://www.swiggy.com/dapi/support?");
        const data = await response.json();
        setIssuesTypes(data?.data?.issueTypes?.data);
    }

    const handleClick = (id)=> {
        setActiveId(id)
    }

    return(
        <article className="support__content__issues">
            {issueTypes.map(issue => {
                const {type,title} = issue;
                return <Link  key={type} className="title" to={"issues/" + type} >
                    <div onClick={()=>handleClick(type)} className={activeId=== type?"active-link":""}>{title}</div>
                </Link>
            })}
        </article>
    )
}

export default IssueTypes;