import PropTypes from 'prop-types';

export default PropTypes.shape({
  isSending: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  isComplete: PropTypes.bool.isRequired,
  isFailed: PropTypes.bool,
  responseCode: PropTypes.number
});
