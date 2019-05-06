import { Action } from 'rxjs/internal/scheduler/Action';

const INITIAL_STATE = [];

export default function favorities(state = INITIAL_STATE, action) {
  console.log('Chegou qui no reducers');
  console.log(action);
  switch (action.type) {
    case 'ADD_FAVORITE_SUCCESS':
      return [...state, action.payload.data];
    default:
      return state;
  }
}
