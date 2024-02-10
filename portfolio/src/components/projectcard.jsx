import React from "react";

export default function ProjectCard({ title, image, deployedUrl, githubUrl }) {
  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      {/* If you have specific items to list in each card, update these as needed */}
      <ul className="list-group list-group-flush">
        <li className="list-group-item">A feature of the project</li>
        <li className="list-group-item">Another feature</li>
        <li className="list-group-item">And another one</li>
      </ul>
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
