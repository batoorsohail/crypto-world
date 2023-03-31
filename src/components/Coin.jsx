import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';
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
      <section className="input-section">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>
      <section className="coins-container">
        {
          searchCoins.map((cryptoCoin) => (
            <article key={cryptoCoin.id} className="coins-main-container">
              <div className="details-icon-container">
                <Link to={`crypto-world/details/${cryptoCoin.id}`}><IoMdArrowRoundForward className="icon icon-details" /></Link>
              </div>
              <img
                src={cryptoCoin.icon}
                alt={`${cryptoCoin.name}logo`}
                className="coin-logo"
              />
              <h2 className="coin-name">{cryptoCoin.name}</h2>
              <span className="coin-supply">{cryptoCoin.totalSupply}</span>
            </article>
          ))
        }
      </section>
    </>
  );
}
