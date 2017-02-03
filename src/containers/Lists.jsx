import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getLists } from '../actions';

// props validation using airbnb's  style guide
const propTypes = {
  dispatch: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
};

// smart containers that handles logic and provides data
class Lists extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    // dispatch action creator with dummy data
    dispatch(getLists(['list1', 'list2']));
  }

  render() {
    const { lists } = this.props;
    return (
      <div>{JSON.stringify(lists)}</div>
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