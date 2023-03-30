import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCryptoCoinsAsync } from '../redux/coin/cryptoSlice';

export default function Home() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(getCryptoCoinsAsync());
  }, [dispatch]);

  const { cryptoCoins } = useSelector((state) => state.cryptoCoins);

  if (!cryptoCoins) {
    return <p>No coins loaded</p>;
  }

  const searchCoins = cryptoCoins
    .filter((crypto) => crypto.name.toLowerCase()
      .includes(searchQuery.toLowerCase()));

  return (
    <>
      <section>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>
      <section>
        {
          searchCoins.map((cryptoCoin) => (
            <article key={cryptoCoin.id}>
              <Link to={`crypto-world/details/${cryptoCoin.id}`}>Details</Link>
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
    </>
  );
}
