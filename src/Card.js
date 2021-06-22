import React from 'react';
import './Card.css';

export const Card = ({ title, imageUrl, imageAlt, bodyContent, mainLink }) => {
  const cardContentWithoutMainLink = (
    <>
      <div className="content">
        <h3 className="title">{title}</h3>
        <div className="body">{bodyContent}</div>
      </div>
      <img className="img" src={imageUrl} alt={imageAlt} />
    </>
  );

  const cardContent = mainLink ? (
    <a href={mainLink} aria-label={title}>
      {cardContentWithoutMainLink}
    </a>
  ) : (
    <div className="cardContentNoLink">{cardContentWithoutMainLink}</div>
  );

  return <div className="card">{cardContent}</div>;
};
