import PropTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ message }) => {
  const { msg } = css;

  return <p className={msg}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
