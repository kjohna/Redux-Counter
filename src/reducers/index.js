import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  // console.log("reducer!");
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
      // console.log("reducer: increment. action.payload: ", action.payload);
      // let count = state.count; --> making a copy then changing the new var would be ok, but dangerous since if state.count was an obj or arr then it would mutate state.
      return {
        ...state,
        count: state.count + 1  // this is a good way to not mutate state
        //++state.count-->this would mutate state, don't do!!
      }
    case DECREMENT:
    // Fill in the body of this case
      return {
        ...state,
        count: state.count -1 // --action.payload --> don't need to pass this around, read directly from state
      }
    default:
      return state;
  }
};
