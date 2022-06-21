import './coin.css';
import PropTypes from 'prop-types';

function Coin(props) {
  const { coin } = props;

  return (
    <div className="Coin">
      <div className="Heading">
        Cryptocurrency Data
      </div>
      {coin}
    </div>
  );
}

export default Coin;

Coin.propTypes = { coin: PropTypes.string.isRequired };
