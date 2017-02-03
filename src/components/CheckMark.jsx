import React, { PropTypes } from 'react';

const propTypes = {
  domain: PropTypes.string.isRequired,
};

// functional component that renders to the page
const CheckMark = ({ domain }) => {
  return (
    <td>{/\.com$|\.lol$/.test(domain) ? (<i className="fa fa-check" aria-hidden="true" />) : ''}</td>
  );
};

CheckMark.propTypes = propTypes;

export default CheckMark;