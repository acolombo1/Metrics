const initState = [];

const DataReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return action.payload;
    default:
      return state;
  }
};

export default DataReducer;
