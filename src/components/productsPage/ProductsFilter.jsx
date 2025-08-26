
import { useDispatch, useSelector } from 'react-redux';
import { setFilterType } from '../../store/productsSlice';
import { selectFilterType, selectProductTypes } from '../../store/selectors';

export default function ProductsFilter() {
  const dispatch = useDispatch();
  const filterType = useSelector(selectFilterType);
  const types = useSelector(selectProductTypes)

  const handleChange = (e) => {
    dispatch(setFilterType(e.target.value));
  };

  return (
    <select value={filterType} onChange={handleChange}>
      {types.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}
