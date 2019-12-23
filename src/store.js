import { createStore } from 'redux';

const initialState = {
  users: [],
  id: [],
};

const reducer = (state = initialState, action) => state;

export default createStore(reducer);
