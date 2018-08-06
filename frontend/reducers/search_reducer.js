import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import merge from 'lodash/merge';

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, state, action.results);
    default:
      return state;
  }
};

export default SearchReducer;
