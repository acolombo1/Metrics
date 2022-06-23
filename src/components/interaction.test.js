import { Provider } from 'react-redux';
import { render, fireEvent, screen } from '@testing-library/react';
import { toHaveClass } from '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Coin from './Coin';
import configureStore from '../redux/configureStore';
import { coinsmock } from '../__mocks__/mock';

console.log(toHaveClass);

describe('Navigation', () => {
  test('navigation to a coin detail, and back to home', () => {
    render(
      <Provider store={configureStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home coins={coinsmock} />} />
            { coinsmock.map((coin) => <Route key={coin.id} path={`/${coin.id}`} element={<Coin />} />) }
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    fireEvent.click(screen.getByText('BTC'));
    expect(screen.getByText('Data for BTC').parentElement).toHaveClass('Secondrow');
    fireEvent.click(screen.getByText('<'));
    expect(screen.getByText('TOP 100').parentElement).toHaveClass('right');
  });
});

describe('Filtering', () => {
  test('Filter elements 2 to 5', async () => {
    render(
      <Provider store={configureStore}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home coins={coinsmock} />} />
            { coinsmock.map((coin) => <Route key={coin.id} path={`/${coin.id}`} element={<Coin />} />) }
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    const input = screen.getByPlaceholderText('1-10');
    await userEvent.type(input, '2-5');
    fireEvent.click(screen.getByText('Filter'));
    expect(screen.getAllByText('Market cap')).toHaveLength(5);
  });
});
