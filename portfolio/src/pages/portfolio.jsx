import React from "react";
import ProjectCard from "../components/ProjectCard"; // Ensure correct path

export default function Portfolio() {
    const projects = [
        {
            title: 'Pet Friendly',
            image: '/path-to-image-1.jpg',
            deployedUrl: 'https://alamm01.github.io/petfriendly/',
            githubUrl: 'https://github.com/alamm01/petfriendly',
        },
        {
            title: 'Project 2',
            image: '/path-to-image-2.jpg',
            deployedUrl: 'https://deployed-link-2.com',
            githubUrl: 'https://github-link-2.com',
        },
        {
            title: 'Project 3',
            image: '/path-to-image-3.jpg',
            deployedUrl: 'https://deployed-link-3.com',
            githubUrl: 'https://github-link-3.com',
        },
        {
            title: 'Project 4',
            image: '/path-to-image-4.jpg',
            deployedUrl: 'https://deployed-link-4.com',
            githubUrl: 'https://github-link-4.com',
        },
        {
            title: 'Project 5',
            image: '/path-to-image-5.jpg',
            deployedUrl: 'https://deployed-link-5.com',
            githubUrl: 'https://github-link-5.com',
        },
        {
            title: 'Project 6',
            image: '/path-to-image-6.jpg',
            deployedUrl: 'https://deployed-link-6.com',
            githubUrl: 'https://github-link-6.com',
        }
    ];

    const portfolioStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Portfolio Page</h1>
            <div style={portfolioStyle}>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        image={project.image}
                        deployedUrl={project.deployedUrl}
                        githubUrl={project.githubUrl}
                    />
                ))}
            </div>
        </>
    );
}
