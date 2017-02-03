import React, { Component } from 'react';

class ListItem extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const { handleClickOnList, id } = this.props;
    console.log('handleclick id', id);
    handleClickOnList(id);
  }
  render() {
    const { domain, price } = this.props;
    return (
      <tr onClick={this.handleClick}>
        <td>{domain}</td>
        <td>{/\.com$|\.lol$/.test(domain) ? (<i className="fa fa-check" aria-hidden="true" />) : ''}</td>
        <td>{price}</td>
      </tr>
    );
  }
}

export default ListItem;