import React from 'react';
import { Card } from './Card.js';
import logo from './logo.svg';
import './ClickableCardGoodExample.css';

export const ClickableCardGoodExample = () => (
  <ol className="cards-container">
    <Card
      title="Learn React"
      mainLink="https://reactjs.org/"
      imageUrl={logo}
      imageAlt="React Logo"
      bodyContent={cardContent}
    />
    <Card
      title="Learn React"
      mainLink="https://reactjs.org/"
      imageUrl={logo}
      imageAlt="React Logo"
      bodyContent={cardContent}
    />
  </ol>
);

const cardContent = (
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
