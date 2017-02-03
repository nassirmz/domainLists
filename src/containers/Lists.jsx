import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Table, Col } from 'react-bootstrap';

import { startGetLists, starGetListDetail, unsetDetail } from '../actions';
import ListItem from './ListItem';
import ListDetail from './ListDetail';

// props validation using airbnb's  style guide
const propTypes = {
  dispatch: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
  isDetailAvailable: PropTypes.bool.isRequired,
};

// smart containers that handles logic and provides data
class Lists extends Component {
  constructor() {
    super();
    this.renderLists = this.renderLists.bind(this);
    this.handleClickOnList = this.handleClickOnList.bind(this);
    this.handleSubmitListDetail = this.handleSubmitListDetail.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    // dispatch action creator with dummy data
    dispatch(startGetLists());
  }

  handleClickOnList(id) {
    const { dispatch } = this.props;
    dispatch(starGetListDetail(id));
  }

  handleSubmitListDetail() {
    const { dispatch } = this.props;
    dispatch(unsetDetail());
  }

  renderLists() {
    const { lists } = this.props;
    return (
      <Table condensed hover>
        <thead>
          <tr>
            <th>Domain Name</th>
            <th>Uniregistry</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {lists.map((list) => {
            return (
              <ListItem {...list} key={list.id} handleClickOnList={this.handleClickOnList} />
            );
          })}
        </tbody>
      </Table>
    );
  }

  renderIndiviualList () {
    const { listDetail } = this.props;
    return (
      <ListDetail {...listDetail} handleSubmitListDetail={this.handleSubmitListDetail} />
    );
  }

  render() {
    const { isDetailAvailable } = this.props;
    console.log(isDetailAvailable);
    return (
      <Col>
        {isDetailAvailable ? this.renderIndiviualList() : this.renderLists()}
      </Col>
    );
  }
}


function mapStateToProps(state) {
  return {
    lists: state.lists,
    isDetailAvailable: state.isDetailAvailable,
    listDetail: state.listDetail,
  };
}

Lists.propTypes = propTypes;

export default connect(mapStateToProps)(Lists);