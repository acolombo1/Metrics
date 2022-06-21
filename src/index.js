import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import Coin from './components/Coin';
import Store from './redux/configureStore';

const TICKERS_URL = 'https://api.coinpaprika.com/v1/tickers';

const initall = async () => {
  const response = await fetch(TICKERS_URL, { method: 'GET' });
  let coins = await response.json();
  coins = coins.slice(0, 100);
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home coins={coins} />} />
          { coins.map((coin) => <Route key={coin.id} path={`/${coin.id}`} element={<Coin coin={coin.symbol} />} />) }
        </Routes>
      </BrowserRouter>
    </Provider>,
  );
};

initall();
