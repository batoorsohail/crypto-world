import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCryptoCoinsAsync } from '../redux/coin/cryptoSlice';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCryptoCoinsAsync());
  }, [dispatch]);

  const { cryptoCoins } = useSelector((state) => state.cryptoCoins);

  if (!cryptoCoins) {
    return <p>No coins loaded</p>;
  }

  return (
    <section>
      {
        cryptoCoins.map((cryptoCoin) => (
          <article key={cryptoCoin.id}>
            <Link to={`touch-coin/details/${cryptoCoin.id}`}>Details</Link>
            <img
              src={cryptoCoin.icon}
              alt={`${cryptoCoin.name}logo`}
            />
            <h2>{cryptoCoin.name}</h2>
            <span>{cryptoCoin.totalSupply}</span>
          </article>
        ))
      }
    </section>
  );
}
