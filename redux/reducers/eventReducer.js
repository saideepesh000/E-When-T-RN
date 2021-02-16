import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from '../types';
import { sampleEvents } from '../../data/sampleEvents';

const initialState = {
  events: sampleEvents,
};

export default function eventReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [action.payload, ...state.events],
      };

    case UPDATE_EVENT:
      return {
        ...state,
        events: [
          ...state.events.filter((e) => e.id !== action.payload.id),
          action.payload,
        ],
      };

    case DELETE_EVENT:
      return {
        ...state,
        events: [...state.events.filter((e) => e.id !== action.payload)],
      };
    default:
      return state;
  }
}
