import { GET_ALL_PAINTINGS } from '../types';
import axios from 'axios';

export const getAllPaintings = () => async (dispatch) => {
  const allPaintings = (await axios.get('http://localhost:8080/paintings/all'))
    .data;
  return dispatch({
    type: GET_ALL_PAINTINGS,
    payload: allPaintings,
  });
};
