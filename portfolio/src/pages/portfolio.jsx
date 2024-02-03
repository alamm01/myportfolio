import React from "react";
import Projectcard from "../components/projectcard";

export default function Portfolio({}) {
    const projects = [
        {
            title:'project 1'
        },
        {
            title: 'project 2'
        },
        {
            title: 'project 3'
        },

    ]

    return (

        <>

            <h1>Portfolio page</h1>
            {projects.map(project=>(
                <Projectcard title={project.title} key={project.title} />
            ))}

        </>

    )
}