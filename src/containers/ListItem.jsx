import React, { Component, PropTypes } from 'react';

import CheckMark from '../components/CheckMark';

const propTypes = {
  handleClickOnList: PropTypes.func.isRequired,
  domain: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

class ListItem extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { handleClickOnList, id } = this.props;
    handleClickOnList(id);
  }
  render() {
    const { domain, price } = this.props;
    return (
      <tr onClick={this.handleClick}>
        <td>{domain}</td>
        <CheckMark domain={domain} />
        <td>{price}</td>
      </tr>
    );
  }
}

ListItem.propTypes = propTypes;

export default ListItem;