import React from 'react';
import './NonInteractiveCardBad.css';

export const NonInteractiveCardBad = ({ title, imageUrl, bodyContent }) => (
  <div className="nonInteractiveCardBad">
    <img className="img" src={imageUrl} />
    <div className="content">
      <p className="title">{title}</p>
      <div className="body">{bodyContent}</div>
    </div>
  </div>
);

// ISSUES:
// - title should be a heading element
// - missing image alt attribute
// - image order, should be placed after the heading
// - cards should be a list item <li> element
