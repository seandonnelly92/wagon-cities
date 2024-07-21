// Generally keep the actions all inside this index file
// Export each function on the spot

// TODO: add and export your own actions

// Import the data file
import cities from '../cities';

// The city_list_reducer will receive the action as an argument
export function setCities() {
  // TODO: API Call (next step)
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}


export function anotherFunction() {
  // TODO: API Call (next step)
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}
