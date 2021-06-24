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
        <h4 className="title">{title}</h4>
        <div className="body">{bodyContent}</div>
      </div>
      <img className="img" src={imageUrl} alt={imageAlt} />
    </a>
  </li>
);

// ISSUES
// - clicking the button also clicks the card link since they're nested
// - screen readers can't navigate to the button since they're nested

// export const NestedClickableCardBad = ({
//   title,
//   imageUrl,
//   imageAlt,
//   bodyContent,
//   mainLink,
// }) => (
//   <li className="nestedClickableCardBad">
//     <div className="cardContentWithNestedInteractiveContent">
//       <div className="content">
//         <h4 className="title">
//           <a href={mainLink}>{title}</a>
//         </h4>
//         <div className="body">{bodyContent}</div>
//       </div>
//       <img className="img" src={imageUrl} alt={imageAlt} />
//     </div>
//   </li>
// );
