const GET_CITIES_START = 'GET_CITIES_START';
const GET_CITIES_END = 'GET_CITIES_END';

export function getCities() {
  return async (dispatch) => {
    dispatch({ type: GET_CITIES_START });

    const response = await fetch('/api/v1/cities');
    const cities = await response.json();

    dispatch({ type: GET_CITIES_END, payload: cities });
  };
}

const initialState = {
  isFetching: false,
  cities: [],
};

const ACTION_HANDLERS = {
  [GET_CITIES_START]: state => ({ ...state, isFetching: true }),
  [GET_CITIES_END]: (state, payload) => ({ ...state, isFetching: false, cities: payload }),
};

export default (state = initialState, { type, payload }) => {
  const handler = ACTION_HANDLERS[type];

  return handler ? handler(state, payload) : state;
};
