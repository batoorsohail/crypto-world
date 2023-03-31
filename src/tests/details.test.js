import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Detail from '../pages/Details';
import store from '../redux/store';

describe('Detail', () => {
  test('renders correctly with valid coin', () => {
    const mockCoin = {
      id: 'bitcoin',
      name: 'Bitcoin',
      icon: 'https://example.com/bitcoin.png',
      price: 50000,
      priceChange1h: 0.5,
      priceChange1d: -1.2,
      totalSupply: 21000000,
      availableSupply: 19000000,
      marketCap: 1000000000,
      volume: 500000000,
    };
    const { container } = render(
      <Provider store={store}>
        <Detail />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
