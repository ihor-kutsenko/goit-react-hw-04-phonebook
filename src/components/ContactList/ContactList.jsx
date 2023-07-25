import PropTypes from 'prop-types';
import { RiDeleteBinLine } from 'react-icons/ri';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.list}>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.item}>
            <span className={css.name}>{name}:</span>
            <span className={css.phone}>{number}</span>
            <button
              type="button"
              className={css.button}
              onClick={() => onDelete(id)}
            >
              <RiDeleteBinLine size="16" />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func,
};

export default ContactList;
