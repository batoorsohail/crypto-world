import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './details.css';

const Details = () => {
  const { cryptoCoins } = useSelector((state) => state.cryptoCoins);
  const { id } = useParams();
  const cryptoCoin = cryptoCoins.find((item) => item.id === id);
  if (!cryptoCoin) {
    return <p>Please go back to the home page and choose coin</p>;
  }

  return (
    <section className="details-section">
      <article className="main-details">
        <img src={cryptoCoin.icon} alt={cryptoCoin.icon} className="coin-logo2" />
        <h3 className="coin-name2">
          {cryptoCoin.name}
        </h3>
      </article>
      <article className="details-info">
        <h3 className="details-title">Details</h3>
        <p className="details-text">
          Price:
          <span className="item-dt">{cryptoCoin.price}</span>
        </p>
        <p className="details-text">
          High:
          <span className="item-dt">{cryptoCoin.priceChange1h}</span>
        </p>
        <p className="details-text">
          Diff:
          <span className="item-dt">{cryptoCoin.priceChange1d}</span>
        </p>
        <p className="details-text">
          Low:
          <span className="item-dt">{cryptoCoin.priceChange1w}</span>
        </p>
        <p className="details-text">
          Total Supply:
          <span className="item-dt">{cryptoCoin.totalSupply}</span>
        </p>
        <p className="details-text">
          Available Supply:
          <span className="item-dt">{cryptoCoin.availableSupply}</span>
        </p>
        <p className="details-text">
          Market Cap:
          <span className="item-dt">{cryptoCoin.marketCap}</span>
        </p>
        <p className="details-text">
          Volume:
          <span className="item-dt">{cryptoCoin.volume}</span>
        </p>
      </article>
    </section>
  );
};

export default Details;
