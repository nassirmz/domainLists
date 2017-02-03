import React from 'react';

// functional component that renders to the page
const CheckMark = ({ domain }) => {
  return (
    <td>{/\.com$|\.lol$/.test(domain) ? (<i className="fa fa-check" aria-hidden="true" />) : ''}</td>
  );
};

export default CheckMark;