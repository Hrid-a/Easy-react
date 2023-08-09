import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { ISSUES_URL } from "../utils/cons";

const Issues = ()=> {
    const [qes, setQes] = useState({});
    const [variable, setVariable] = useState(false);
    const [activeP, setAcitiveP] = useState(null);
    const {issueId} = useParams();

    useEffect(()=> {
        fetchData()
    }, [issueId])

    const fetchData = async ()=> {
        // console.log(ISSUES_URL + (issueId || "partner-onboarding"));
        const response = await fetch(ISSUES_URL + (issueId || "partner-onboarding"));
        const data = await response.json();
        setQes(data?.data?.issues)
    }

    const handleAccordion = (id)=> {
        setVariable(!variable)
        setAcitiveP(id)
    }

    if(Object.keys(qes).length === 0) return;
    // const {data} = qes?.data;
    

    return (<article className="support__content__support__content__issues--container">
            <h4>{qes?.meta?.type}</h4>
            {qes?.data.map(item => {
                return (
                    <div className="support__answer" key={item.id}>
                        <div onClick={()=>handleAccordion(item.id)}>
                            <p>{item.title}</p>
                            <span>{variable?"-" : "+"}</span>
                        </div>
                        <article className={item.id === activeP && variable?"":"d-none"}>
                            <p>{item.description}</p>
                            <span>{item.hyperLinkText}</span>
                        </article>
                    </div>
                    )
                })}
        </article>
    )
}

export default Issues;