const GET_AGENT_START = 'GET_AGENT_START';
const GET_AGENT_END = 'GET_AGENT_END';

export function getAgent() {
  return async (dispatch) => {
    dispatch({ type: GET_AGENT_START });

    const response = await fetch('/api/v1/agent');
    const agent = await response.json();

    dispatch({ type: GET_AGENT_END, payload: agent });
  };
}

const initialState = {
  isFetching: false,
  info: {},
};

const ACTION_HANDLERS = {
  [GET_AGENT_START]: state => ({ ...state, isFetching: true }),
  [GET_AGENT_END]: (state, payload) => ({ ...state, isFetching: false, info: payload }),
};

export default (state = initialState, { type, payload }) => {
  const handler = ACTION_HANDLERS[type];

  return handler ? handler(state, payload) : state;
};
