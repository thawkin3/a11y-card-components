import React from 'react';
import './ClickableCardBad.css';

export const ClickableCardBad = ({
  title,
  imageUrl,
  imageAlt,
  bodyContent,
  mainLink,
}) => (
  <li className="clickableCardBad">
    <a href={mainLink} className="linkWrapper">
      <div className="content">
        <h4 className="title">{title}</h4>
        <div className="body">{bodyContent}</div>
      </div>
      <img className="img" src={imageUrl} alt={imageAlt} />
    </a>
  </li>
);

// ISSUES
// - anchor tag reads all the content, needs an aria-label
// - (but then it ONLY reads the aria-label content, so beware)
