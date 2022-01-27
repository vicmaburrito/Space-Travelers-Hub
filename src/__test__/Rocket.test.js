import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rockets from '../components/Rockets/RocketViews';
import store from '../redux/configureStore';

test('renders rockets component', () => {
  render(<Provider store={store}><Rockets /></Provider>);
});
