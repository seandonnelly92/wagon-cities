// (previousState, action) => {
//   // Computing new state from given action
//   return newState;
// }


// The reducer returns the new state
export default function (state, action) {
  // If the existing state is undefine, return an empty array
  if (state === undefined) {
    return [];
  }
  // the action comes from the index.js. If it is set_cities then it will return
  // the action's payload, which is the cities that were imported via AIP or local data JS file.
  if (action.type === 'SET_CITIES') {
    return action.payload;
  // if the action received is not undefined or the action this reducer is looking for (SET_STATES)
  // just return the state as it was (so the outcome is unaffected)
  } return state;
}

// export default function(state, action) {
//   // TODO: Handle actions
//   // The goal of the reducer is to compute and return a new state
//   switch (action.type) {
//     case state === undefined:
//       return [];
//     case 'SET_FLATS':
//       return action.payload; // The new state is in the payload
//     default:
//       return state; // The reducer must always return something
//       // if the action.type is not SET_FLATS, it just returns the current state
//   }
// }

// The above function is anonymous. It doesn't have a name.
// I could also write a named function like this:

// const flatsReducer = (state, action) => {
//   if (state === undefined) {
//     return []
//   }
//   // TO DO: Handle actions
// }

// export default flatsReducer
