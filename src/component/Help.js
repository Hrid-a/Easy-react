import React, { useState } from "react";
import IssueTypes from "./IssueTypes";
import Issues from "./Issues";
const Help = ()=> {
    return(
        <div className="container issues">
            <h1 style={{paddingTop:"2rem"}}>Help & support </h1>
            <p style={{marginBlockEnd:"2rem"}}>Let's take a step a head and help you better</p>
            <div className="support">
                <section className="support__content">
                    <IssueTypes />
                    <Issues/>
                </section>
            </div>
        </div>
    )
}

export default Help;