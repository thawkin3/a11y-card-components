import React from 'react';
import { ClickableCardExample } from './ClickableCardExample';
import './App.css';

export const App = () => (
  <main>
    <h1>Accessible Card Components</h1>
    <hr />
    <h2>Non-Interactive Content</h2>
    <h3>Bad Example</h3>
    <ClickableCardExample />
    <h3>Good Example</h3>
    <ClickableCardExample />
    <hr />
    <h2>Entire Card is Clickable</h2>
    <h3>Bad Example</h3>
    <ClickableCardExample />
    <h3>Good Example</h3>
    <ClickableCardExample />
    <hr />
    <h2>Entire Card is Clickable AND There's Nested Interactive Content</h2>
    <h3>Bad Example</h3>
    <ClickableCardExample />
    <h3>Good Example</h3>
    <ClickableCardExample />
  </main>
);
