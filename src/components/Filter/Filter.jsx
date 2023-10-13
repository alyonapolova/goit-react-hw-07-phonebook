import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactSlice';
import { FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleSetFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <FilterInput
      onChange={handleSetFilter}
      name="filter"
      placeholder="Find contacts by name"
      type="text"
    />
  );
};
export default Filter;
