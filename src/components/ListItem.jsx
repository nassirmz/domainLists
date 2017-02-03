import React from 'react';

const ListItem = ({ domain, price }) => {
  return (
    <tr>
      <td>{domain}</td>
      <td>{/\.com$|\.lol$/.test(domain) ? (<i className="fa fa-check" aria-hidden="true" />) : ''}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ListItem;