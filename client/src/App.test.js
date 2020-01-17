import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render, getByLabelText} from '@testing-library/react';
import 'react-dom/test-utils';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('App Renders without crashing', () => {
  const component = render(<App />);
  console.log(component.getByAltText);
});

test('Dark Mode Renders', () => {
  const {getByTestId} = render(<App />);

    getByTestId('dark-toggled');
});

test('Header Womens Soccer Renders', () => {
  const {getByText} = render(<App />);

  getByText(/soccer/i);
});

