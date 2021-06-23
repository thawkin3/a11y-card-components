import React from 'react';
import './ClickableCardBad.css';

export const ClickableCardBad = ({
  title,
  imageUrl,
  imageAlt,
  bodyContent,
  mainLink,
}) => (
  <div className="clickableCardBad">
    <a href={mainLink} className="linkWrapper">
      <div className="content">
        <h3 className="title">{title}</h3>
        <div className="body">{bodyContent}</div>
      </div>
      <img className="img" src={imageUrl} alt={imageAlt} />
    </a>
  </div>
);

// ISSUES
// - anchor tag reads all the content, needs an aria-label
// - (but then it ONLY reads the aria-label content, so beware)
