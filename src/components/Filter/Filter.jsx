import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      <div className={css.label_wrapper}>
        <BsSearch size="14" /> Find contacts by name
      </div>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="search"
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
