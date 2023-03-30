import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Details = () => {
  const { cryptoCoins } = useSelector((state) => state.cryptoCoins);
  const { id } = useParams();
  const cryptoCoin = cryptoCoins.find((item) => item.id === id);

  return (
    <section>
      <article>
        <img src={cryptoCoin.icon} alt={cryptoCoin.icon} />
        <h3>{cryptoCoin.name}</h3>
        <p>
          Price:{cryptoCoin.price}
        </p>
        <h4>Price Changes</h4>
        <p>
          High:
          {cryptoCoin.priceChange1h}
        </p>
        <p>
          Diff:
          {cryptoCoin.priceChange1h}
        </p>
        <p>
          Low:
          {cryptoCoin.priceChange1h}
        </p>
      </article>
      <article>
        <h4>Market Info</h4>
        <p>
          Total Supply:
          {cryptoCoin.totalSupply}
        </p>
        <p>
          Available Supply:
          {cryptoCoin.availableSupply}
        </p>
        <p>
          Market Cap:
          {cryptoCoin.marketCap}
        </p>
        <p>
          Volume:
          {cryptoCoin.volume}
        </p>
      </article>
    </section>
  );
};

export default Details;
