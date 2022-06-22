import DataReducer from './datareducer';
import FilterReducer from './filterreducer';
import samplepayload from '../__mocks__/mock.js'

test('DataReducer gets data', () => {
  const result = DataReducer([], {
    type: 'GET_DATA',
    payload: samplepayload,
  });

  expect(result).toStrictEqual(samplepayload);
});

test('Filter reducer updates filter', () => {
  const result = FilterReducer({ liminf: 1, limsup: 20 }, { type: 'SET_FILTER', payload: { liminf: 3, limsup: 25 } });

  expect(result).toStrictEqual({ liminf: 3, limsup: 25 });
});
