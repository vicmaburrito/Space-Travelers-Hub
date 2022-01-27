import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../components/Missions';
import store from '../redux/configureStore';

test('renders missions component', () => {
  render(<Provider store={store}><Missions /></Provider>);
});
