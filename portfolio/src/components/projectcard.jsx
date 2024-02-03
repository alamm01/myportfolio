import React from "react";

export default function Projectcard({title}) {
  return (
    <div className="card">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
      </ul>
      <div className="card-body">
        {/* <a href="#" ref="noreferer" className="card-link">
          Card link
        </a>
        <a href="#" rel="noreferer" className="card-link">
          Another link
        </a> */}
      </div>
    </div>
  );
}
