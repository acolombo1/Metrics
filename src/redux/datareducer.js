const initState = [];
const TICKERS_URL = 'https://api.coinpaprika.com/v1/tickers';

const DataReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return action.payload;
    default:
      return state;
  }
};

export const GetDataAPI = () => async (dispatch) => {
  const response = await fetch(TICKERS_URL, { method: 'GET' });
  const responseobj = await response.json();
  dispatch({
    type: 'GET_DATA',
    payload: responseobj,
  });
};

export default DataReducer;
