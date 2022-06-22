const initState = {
  coins: [],
  globalmktcap: 0,
  coindata: {
    id: '',
    name: '',
    symbol: '',
    rank: 0,
    circulating_supply: 0,
    total_supply: 0,
    max_supply: 0,
    beta_value: 0,
    first_data_at: '',
    last_updated: '',
    quotes: {
      USD: {
        price: 0,
        volume_24h: 0,
        volume_24h_change_24h: 0,
        market_cap: 0,
        market_cap_change_24h: 0,
        percent_change_15m: 0,
        percent_change_30m: 0,
        percent_change_1h: 0,
        percent_change_6h: 0,
        percent_change_12h: 0,
        percent_change_24h: 0,
        percent_change_7d: 0,
        percent_change_30d: 0,
        percent_change_1y: 0,
        ath_price: 0,
        ath_date: '',
        percent_from_price_ath: 0,
      },
    },
  },
};

const DataReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return action.payload;
    default:
      return state;
  }
};

export default DataReducer;

export const GetDataAPI = (coinsymbol) => async (dispatch) => {
  const TICKERS_URL = 'https://api.coinpaprika.com/v1/tickers';

  const response = await fetch(TICKERS_URL, { method: 'GET' });
  let coins = await response.json();
  coins = coins.slice(0, 100);
  let sum = 0;
  coins.forEach((coin) => { sum += coin.quotes.USD.market_cap; });
  const coindata = coins.filter((coin) => (coin.symbol === coinsymbol))[0];
  dispatch({
    type: 'GET_DATA',
    payload: { coins, globalmktcap: sum, coindata },
  });
};
