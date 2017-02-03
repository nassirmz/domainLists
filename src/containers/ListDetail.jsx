import React, { Component } from 'react';
import { Form, FormGroup, Button, Col, ControlLabel, FormControl } from 'react-bootstrap';

class ListDetail extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { handleSubmitListDetail } = this.props;
    handleSubmitListDetail();
  }
  render() {
    const { domain, registrant_email, price } = this.props;
    return (
      <Form horizontal onSubmit={(e) => { this.handleSubmit(e); }}>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Domain Name
          </Col>
          <Col sm={8}>
            <FormControl value={domain}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Registration Email
          </Col>
          <Col sm={8}>
            <FormControl value={registrant_email}/>
          </Col>
        </FormGroup>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Price
          </Col>
          <Col sm={8}>
            <FormControl value={price}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">
              Save Changes
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default ListDetail;