import React from 'react';

const ListItem = ({ id, domain, price }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{domain}</td>
      <td>check Mark</td>
      <td>{price}</td>
    </tr>
  );
};

export default ListItem;