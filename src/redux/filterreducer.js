const initState = { liminf: 1, limsup: 20 };

const FilterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload;
    default:
      return state;
  }
};

export default FilterReducer;
