import { GET_USER } from '../actions/getUser';

export default (state = false, action) => {
  switch (action.type) {
    case GET_USER:
      return action.payload;

    default:
      return state;
  }
}