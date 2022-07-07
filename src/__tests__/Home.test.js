import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Navlinks/Home';

it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
