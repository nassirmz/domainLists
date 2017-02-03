import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

import { startGetLists } from '../actions';
import ListItem from '../components/ListItem';

// props validation using airbnb's  style guide
const propTypes = {
  dispatch: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
};

// smart containers that handles logic and provides data
class Lists extends Component {
  constructor() {
    super();
    this.renderLists = this.renderLists.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    // dispatch action creator with dummy data
    dispatch(startGetLists());
  }

  renderLists() {
    const { lists } = this.props;
    return lists.map((list) => {
      return (
        <ListItem {...list} key={list.id} />
      );
    });
  }

  render() {
    return (
      <Table stripped condensed hover>
        <thead>
          <tr>
            <th>Domain Name</th>
            <th>Uniregistry</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.renderLists()}
        </tbody>
      </Table>
    );
  }
}


function mapStateToProps(state) {
  return {
    lists: state.lists,
  };
}

Lists.propTypes = propTypes;

export default connect(mapStateToProps)(Lists);