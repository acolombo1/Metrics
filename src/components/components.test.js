import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from '../redux/configureStore';
import Header from './Header';
import Home from './Home';
import { coinsmock } from '../__mocks__/mock';

test('Header renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={configureStore}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Home renders correctly for mock data', () => {
  const tree = renderer
    .create(
      <Provider store={configureStore}>
        <MemoryRouter>
          <Home coins={coinsmock} />
        </MemoryRouter>
      </Provider>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
