import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useIssues } from "../utils/useIssues";

const IssueTypes = ()=> {
    const [activeId, setActiveId] = useState("partner-onboarding");
    const issueTypes = useIssues();
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