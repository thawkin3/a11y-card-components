import React from 'react';
import './Card.css';

export const Card = ({ title, imageUrl, imageAlt, bodyContent, mainLink }) => (
  <div className="card">
    <a href={mainLink} aria-label={title}>
      <div className="content">
        <h3 className="title">{title}</h3>
        <div className="body">{bodyContent}</div>
      </div>
      <img className="img" src={imageUrl} alt={imageAlt} />
    </a>
  </div>
);
