import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { LabelFilter, InputFilter } from './Filter.styled';
import { getValue } from 'redux/contactsSlice';

export function Filter() {
  const filterName = useSelector(selectFilter);

  const dispatch = useDispatch();

  const getInputValue = event => {
    dispatch(getValue(event.currentTarget.value));
  };
  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        name="filter"
        value={filterName}
        onChange={getInputValue}
      />
    </LabelFilter>
  );
}
