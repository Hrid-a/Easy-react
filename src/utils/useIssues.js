import { useEffect, useState } from "react";
export const useIssues = ()=> {
    const [issueTypes, setIssuesTypes] = useState([]);
    
    useEffect(()=>{
        fetchData()
    }, [])

    const fetchData = async()=> {
        const response = await fetch("https://www.swiggy.com/dapi/support?");
        const data = await response.json();
        setIssuesTypes(data?.data?.issueTypes?.data);
    }

    return issueTypes;
}