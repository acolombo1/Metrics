import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import Filtered from './Filtered';

function Home(props) {
  const { coins } = props;
  const coins2 = useSelector((state) => state.coins.coins, shallowEqual);
  if (coins2.length === 0) {
    let sum = 0;
    coins.forEach((coin) => { sum += coin.quotes.USD.market_cap; });
    const dispatch = useDispatch();
    dispatch({
      type: 'GET_DATA',
      payload: {
        coins,
        globalmktcap: sum,
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
      },
    });
  }

  return (
    <>
      <Header />
      <Filtered />
    </>
  );
}

export default Home;

Home.propTypes = {
  coins: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
    circulating_supply: PropTypes.number.isRequired,
    total_supply: PropTypes.number.isRequired,
    max_supply: PropTypes.number.isRequired,
    beta_value: PropTypes.number.isRequired,
    first_data_at: PropTypes.string.isRequired,
    last_updated: PropTypes.string.isRequired,
    quotes: PropTypes.shape({
      USD: PropTypes.shape({
        ath_date: PropTypes.string.isRequired,
        ath_price: PropTypes.number.isRequired,
        market_cap: PropTypes.number.isRequired,
        market_cap_change_24h: PropTypes.number.isRequired,
        percent_change_1h: PropTypes.number.isRequired,
        percent_change_1y: PropTypes.number.isRequired,
        percent_change_6h: PropTypes.number.isRequired,
        percent_change_7d: PropTypes.number.isRequired,
        percent_change_12h: PropTypes.number.isRequired,
        percent_change_15m: PropTypes.number.isRequired,
        percent_change_24h: PropTypes.number.isRequired,
        percent_change_30d: PropTypes.number.isRequired,
        percent_change_30m: PropTypes.number.isRequired,
        percent_from_price_ath: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        volume_24h: PropTypes.number.isRequired,
        volume_24h_change_24h: PropTypes.number.isRequired,
      }),
    }),
  })).isRequired,
};
