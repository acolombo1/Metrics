import { useSelector, shallowEqual } from 'react-redux';
import './filtered.css';

function Filtered() {
  const liminf = useSelector((state) => state.filter.liminf, shallowEqual);
  const limsup = useSelector((state) => state.filter.limsup, shallowEqual);
  let coins = useSelector((state) => state.coins.coins, shallowEqual);
  const globalmktcap = useSelector((state) => state.coins.globalmktcap, shallowEqual);
  coins = coins.filter((coin) => (coin.rank >= liminf && coin.rank <= limsup));
  return (
    <div className="Filtered">
      <div className="Toprow">
        <div className="left"><img src="/img/paprika3.png" alt="Top 100" width={80} height={80} /></div>
        <div className="right">
          <div>
            TOP 100
            {' '}
            <div className="smallfont">Market cap</div>
          </div>
          <div className="metric">
            {Math.round(globalmktcap / 10000000) / 100}
            {' '}
            Bln
          </div>
        </div>
      </div>
      <div className="Secondrow">
        <div>Market Caps by COIN</div>
      </div>
      <div className="Remainingrows">
        {coins.map((coin) => (
          <div className="square" key={coin.id}>
            <img src={`/img/${coin.symbol}.png`} alt={coin.symbol} width={50} height={50} />
            <br />
            <div className="toright">
              {coin.symbol}
              {' '}
              <span className="smallfont toright">Market cap</span>
            </div>
            <div className="toright">
              {`${Math.round(coin.quotes.USD.market_cap / 10000000) / 100} Bln`}
            </div>
          </div>
        ))}
      </div>
      <div className="Footer">
        <div>&nbsp;</div>
      </div>
    </div>
  );
}

export default Filtered;
