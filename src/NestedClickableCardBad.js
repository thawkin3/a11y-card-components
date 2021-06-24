import React from 'react';
import './NestedClickableCardBad.css';

export const NestedClickableCardBad = ({
  title,
  imageUrl,
  imageAlt,
  bodyContent,
  mainLink,
}) => (
  <li className="nestedClickableCardBad">
    <a href={mainLink} className="linkWrapper">
      <div className="content">
        <h3 className="title">{title}</h3>
        <div className="body">{bodyContent}</div>
      </div>
      <img className="img" src={imageUrl} alt={imageAlt} />
    </a>
  </li>
);

// ISSUES
// - anchor tag reads all the content, needs an aria-label
// - (but then it ONLY reads the aria-label content, so beware)
