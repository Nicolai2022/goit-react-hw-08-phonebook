import { useSelector, useDispatch } from 'react-redux';
import { filterSlice } from '../../redux/FilterSlice';

import { getStatusFilter } from '../../redux/selectors';
import { Label } from 'components/Filter/Filter.styled';

const Filter = () => {
  const filter = useSelector(getStatusFilter);

  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(filterSlice(e.target.value))}
        placeholder="Enter name"
      />
    </Label>
  );
};

export default Filter;
