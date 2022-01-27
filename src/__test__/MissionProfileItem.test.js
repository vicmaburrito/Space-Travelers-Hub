import React from 'react';
import renderer from 'react-test-renderer';
import MissionProfileItem from '../components/MissionProfileItem';

it('renders correctly', () => {
  const tree = renderer.create(<MissionProfileItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
