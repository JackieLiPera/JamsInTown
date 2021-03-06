import { RECEIVE_ARTIST, RECEIVE_ARTISTS } from '../actions/artist_actions';
import { RECEIVE_EVENT, RECEIVE_EVENTS } from '../actions/event_actions';
import { RECEIVE_VENUE } from '../actions/venue_actions';
import { RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';
import { REMOVE_COMMENT, RECEIVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_TRACKING, REMOVE_TRACKING } from '../actions/tracking_actions';
import { merge } from 'lodash';


export default (state = {}, action) => {
  Object.freeze(state);

  let newState = merge({}, state);;
  switch (action.type) {
    case RECEIVE_ARTIST:
      return {[action.artist.id]: action.artist};
    case RECEIVE_ARTISTS:
      return action.artists;
    case RECEIVE_VENUE:
    case RECEIVE_CURRENT_USER:
      return merge({}, state, action.artists);
    case RECEIVE_EVENT:
    case RECEIVE_EVENTS:
      return merge({}, state, action.artist);
    case RECEIVE_TRACKING:
      newState[action.tracking.artist_id].trackers.push(action.tracking.user_id);
      return newState;
    case REMOVE_TRACKING:
      let trackers = newState[action.artistId].trackers;
      let userIdx = trackers.indexOf(action.userId);
      trackers.splice(userIdx, 1);
      newState[action.artistId].trackers = trackers;
      return newState;
    case RECEIVE_COMMENT:
      newState[action.comment.artist_id].comments.unshift(action.comment.id);
      return newState;
    case REMOVE_COMMENT:
      let comments = newState[action.artistId].comments;
      let commentIdx = comments.indexOf(action.commentId);
      comments.splice(commentIdx, 1);
      return newState;
    case RECEIVE_SEARCH_RESULTS:
      return merge(newState, action.results);
    default:
      return state;
  }
};
