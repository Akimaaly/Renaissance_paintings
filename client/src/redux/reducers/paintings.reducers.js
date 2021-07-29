import { GET_ALL_PAINTINGS } from '../types';

export default function paintingsReducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_PAINTINGS: {
      return payload;
    }

    default:
      return state;
  }
}
