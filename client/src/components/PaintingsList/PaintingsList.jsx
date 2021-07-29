import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPaintings } from '../../redux/actions/paintings.actions';
import PaintingItem from '../PaintingItem/PaintingItem';

export default function PaintingsList() {
  const allPaintings = useSelector((state) => state.paintings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPaintings());
    console.log(allPaintings);
  }, []);
  return (
    <>
      {allPaintings.map((el) => (
        <PaintingItem key={el._id} currentPainting={el} />
      ))}
    </>
  );
}
