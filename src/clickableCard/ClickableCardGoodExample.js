import React from 'react';
import { Card } from '../Card.js';
import reactLogo from '../reactLogo.svg';
import accessibilityLogo from '../accessibilityLogo.png';
import './ClickableCardGoodExample.css';

export const ClickableCardGoodExample = () => (
  <ol className="cards-container">
    <Card
      title="Learn React"
      mainLink="https://reactjs.org/"
      imageUrl={reactLogo}
      imageAlt="React Logo"
      bodyContent={reactCardContent}
    />
    <Card
      title="Learn Accessibility"
      mainLink="https://www.w3.org/TR/WCAG21/"
      imageUrl={accessibilityLogo}
      imageAlt="Accessibility Logo"
      bodyContent={accessibilityCardContent}
    />
  </ol>
);

const reactCardContent = (
  <>
    <p>Check out the React docs. Learn React. Build cool stuff!</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero
      felis, tincidunt eu lectus sed, condimentum fringilla orci. Phasellus vel
      mi vitae quam sagittis mattis non a dui. Aliquam sit amet elit tristique,
      suscipit ipsum eget, molestie libero. Mauris lacinia eget nunc eu
      pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia
      nostra, per inceptos himenaeos. Vestibulum ex lacus, auctor non
      consectetur id, dignissim vitae ante. Duis id volutpat nibh, in lobortis
      felis. Sed a accumsan mauris. Morbi vitae sollicitudin enim. Sed luctus
      porttitor massa. Sed finibus metus eu purus varius, id elementum dolor
      congue. Mauris sed neque bibendum, porta sapien vel, placerat ipsum.
      Aliquam suscipit, augue vel vulputate molestie, mi massa convallis magna,
      ac posuere nunc mi vitae turpis. Pellentesque nibh ex, euismod et varius
      eget, vulputate vel odio. Phasellus auctor malesuada lacus eget ultricies.
    </p>
  </>
);

const accessibilityCardContent = (
  <>
    <p>
      Check out the WCAG 2.1 docs. Learn accessibility guidelines. Build cool
      stuff!
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc libero
      felis, tincidunt eu lectus sed, condimentum fringilla orci. Phasellus vel
      mi vitae quam sagittis mattis non a dui. Aliquam sit amet elit tristique,
      suscipit ipsum eget, molestie libero. Mauris lacinia eget nunc eu
      pellentesque. Class aptent taciti sociosqu ad litora torquent per conubia
      nostra, per inceptos himenaeos. Vestibulum ex lacus, auctor non
      consectetur id, dignissim vitae ante. Duis id volutpat nibh, in lobortis
      felis. Sed a accumsan mauris. Morbi vitae sollicitudin enim. Sed luctus
      porttitor massa. Sed finibus metus eu purus varius, id elementum dolor
      congue. Mauris sed neque bibendum, porta sapien vel, placerat ipsum.
      Aliquam suscipit, augue vel vulputate molestie, mi massa convallis magna,
      ac posuere nunc mi vitae turpis. Pellentesque nibh ex, euismod et varius
      eget, vulputate vel odio. Phasellus auctor malesuada lacus eget ultricies.
    </p>
  </>
);
