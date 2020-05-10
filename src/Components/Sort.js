import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
class Sort extends Component {
  render() {
    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </div>
    );
  }
}

export default Sort;