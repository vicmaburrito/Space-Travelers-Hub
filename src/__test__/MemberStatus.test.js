import React from 'react';
import renderer from 'react-test-renderer';
import MemberStatus from '../components/MemberStatus';

it('renders correctly', () => {
  const tree = renderer.create(<MemberStatus />).toJSON();
  expect(tree).toMatchSnapshot();
});
