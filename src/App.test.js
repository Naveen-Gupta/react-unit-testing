import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter()});

/**
  * Factory function to create a ShallowWrapper for te App component.
  * @function setup
  * @param {object} props - Component props specific to this setup.
  * @param {any} state - Initial state for setup
  * @returns {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />);
  if(state) wrapper.setState(state);
  return wrapper;
}

/**
 * Retruns ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test attribute for serach.
 * @returns {ShallowWrapper}
 */ 
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper,'component-app');
  expect(appComponent.length).toBe(1); 
});

test('renders increment button', () => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper,'increment-button');
  expect(incrementButton.length).toBe(1); 
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper,'counter-display');
  expect(counterDisplay.length).toBe(1); 
});

test('counter display starts with zero', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('counter display increments its value after clicking on button', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');

  const counterDisplay = findByTestAttr(wrapper,'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1); 
});
