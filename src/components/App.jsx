import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Lists from '../containers/Lists';
import Header from './Header';

// functional component that renders to the page
const App = () => {
  return (
    <Row>
      <Header />
      <Col xs={12} md={8} mdOffset={2}>
        <Lists />
      </Col>
    </Row>
  );
};

export default App;