import { useSelector, shallowEqual } from 'react-redux';
import './coin.css';
import { useLocation, NavLink } from 'react-router-dom';
import Store from '../redux/configureStore';
import { GetDataAPI } from '../redux/datareducer';

function Coin() {
  const location = useLocation();
  const coinsymbol = location.pathname.substring(1, location.pathname.search('-')).toUpperCase();
  const coins = useSelector((state) => state.coins.coins, shallowEqual);
  let coindata = useSelector((state) => state.coins.coindata, shallowEqual);
  if (coins.length === 0) {
    Store.dispatch(GetDataAPI(coinsymbol));
  } else {
    [coindata] = coins.filter((coin) => (coin.symbol === coinsymbol));
  }
  return (
    <div className="Filtered">
      <div className="Heading">
        <NavLink className="big" to="/">&lt;</NavLink>
        <div>Cryptocurrency Data</div>
        <div>&nbsp;</div>
      </div>
      <div className="Toprow">
        <div className="left"><img src={`/img/${coinsymbol}.png`} alt={coinsymbol} width={80} height={80} /></div>
        <div className="right">
          <div>
            {`${coinsymbol} `}
            <div className="smallfont">Market cap</div>
          </div>
          <div className="metric">
            {Math.round(coindata.quotes.USD.market_cap / 10000000) / 100}
            {' '}
            Bln
          </div>
        </div>
      </div>
      <div className="Secondrow">
        <div>
          Data for
          {' '}
          {coinsymbol}
        </div>
      </div>
      <div className="Nextrows">
        <div>Price</div>
        <div>
          {Number(coindata.quotes.USD.price.toPrecision(5))}
          {' '}
          USD
        </div>
      </div>
      <div className="Nextrows">
        <div>Volume (24hr)</div>
        <div>
          {Number((coindata.quotes.USD.volume_24h / 1000000).toPrecision(4))}
          {' '}
          Millon USD
        </div>
      </div>
      <div className="Nextrows">
        <div>Rank #</div>
        <div>
          {coindata.rank}
        </div>
      </div>
      <div className="Nextrows">
        <div>Beta Value</div>
        <div>
          {coindata.beta_value}
        </div>
      </div>
      <div className="Nextrows">
        <div>Circulating Supply</div>
        <div>
          {coindata.circulating_supply}
          {' '}
          {coinsymbol}
        </div>
      </div>
      <div className="Nextrows">
        <div>All Time High</div>
        <div>
          {Number(coindata.quotes.USD.ath_price.toPrecision(5))}
          {' '}
          USD
        </div>
      </div>
    </div>
  );
}

export default Coin;
