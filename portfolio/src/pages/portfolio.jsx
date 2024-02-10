import React from "react";
import ProjectCard from "../components/ProjectCard"; 
import PetFriendly from '../assets/image/PetFriendly.png';
import FeastFinder from '../assets/image/FeastFinder.png';

export default function Portfolio() {
    const projects = [
        {
            title: 'Pet Friendly',
            // image: '../assets/image/PetFriendly.png',
            image: PetFriendly,
            deployedUrl: 'https://alamm01.github.io/petfriendly/',
            githubUrl: 'https://github.com/alamm01/petfriendly',
            cardText: "The app serves as a comprehensive travel companion for pet owners, providing a user-friendly interface to find and book pet-friendly accommodations and services. It features a real-time suggestion search bar for easy location discovery, detailed information on pet policies and amenities, and customizable filters for tailoring search results. Additionally, users can save favorites, create itineraries, and access customer support, ensuring a seamless travel planning experience that prioritizes their pet's needs."
        },
        {
            title: 'FeastFinder',
            image: FeastFinder,
            deployedUrl: 'https://feastfinder-29c2a8dddaa0.herokuapp.com/',
            githubUrl: 'https://github.com/alamm01/FeastFinder',
            cardText: "This application helps in managing customers and their reservations at your restaurant. It features a user-friendly interface for customers to make or cancel reservations, and an Admin page for managing reservations on behalf of customers. Enhanced security features ensure the safety and privacy of user data."
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
                        cardText={project.cardText}
                    />
                ))}
            </div>
        </>
    );
}
