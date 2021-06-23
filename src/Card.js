import React from 'react';
import './Card.css';

export const Card = ({
  title,
  imageUrl,
  imageAlt,
  bodyContent,
  mainLink,
  hasNestedInteractiveContent,
}) => {
  const cardContentWithoutMainLink = (
    <>
      <div className="content">
        <h3 className="title">{title}</h3>
        <div className="body">{bodyContent}</div>
      </div>
      <img className="img" src={imageUrl} alt={imageAlt} />
    </>
  );

  const cardContentForSupportingNestedInteractiveContent = (
    <>
      <div className="content">
        <h3 className="title">
          <a href={mainLink}>{title}</a>
        </h3>
        <div className="body">{bodyContent}</div>
      </div>
      <img className="img" src={imageUrl} alt={imageAlt} />
    </>
  );

  const cardContent = mainLink ? (
    hasNestedInteractiveContent ? (
      <div className="cardContentWithNestedInteractiveContent">
        {cardContentForSupportingNestedInteractiveContent}
      </div>
    ) : (
      <a href={mainLink} aria-label={title} className="linkWrapper">
        {cardContentWithoutMainLink}
      </a>
    )
  ) : (
    <div className="cardContentNoLink">{cardContentWithoutMainLink}</div>
  );

  return <div className="card">{cardContent}</div>;
};
