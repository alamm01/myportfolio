import React from "react";

export default function ProjectCard({ title, image, deployedUrl, githubUrl, cardText }) {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {cardText}
        </p>
      </div>

      <div className="card-body">
        <a href={deployedUrl} target="_blank" rel="noopener noreferrer" className="card-link">
          Live Demo
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="card-link">
          GitHub Repo
        </a>
      </div>
    </div>
  );
}
