import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/Filter/slice.filter';
import { Label } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(filterContacts(e.target.value.toLowerCase()));
  };

  return (
    <Label>
      Find contacts by name
      <input type="text" onChange={handleChangeFilter} />
    </Label>
  );
}

export default Filter;
