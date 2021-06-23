import React from 'react';
import { NonInteractiveCardBadExample } from './NonInteractiveCardBadExample';
import { NonInteractiveCardGoodExample } from './NonInteractiveCardGoodExample';
import { ClickableCardBadExample } from './ClickableCardBadExample';
import { ClickableCardGoodExample } from './ClickableCardGoodExample';
import { NestedClickableCardBadExample } from './NestedClickableCardBadExample';
import { NestedClickableCardGoodExample } from './NestedClickableCardGoodExample';
import './App.css';

export const App = () => (
  <main>
    <h1>Accessible Card Components</h1>
    <hr />
    <h2>Non-Interactive Content</h2>
    <h3>Bad Example</h3>
    <NonInteractiveCardBadExample />
    <h3>Good Example</h3>
    <NonInteractiveCardGoodExample />
    <hr />
    <h2>Entire Card is Clickable</h2>
    <h3>Bad Example</h3>
    <ClickableCardBadExample />
    <h3>Good Example</h3>
    <ClickableCardGoodExample />
    <hr />
    <h2>Entire Card is Clickable AND There's Nested Interactive Content</h2>
    <h3>Bad Example</h3>
    <NestedClickableCardBadExample />
    <h3>Good Example</h3>
    <NestedClickableCardGoodExample />
  </main>
);
