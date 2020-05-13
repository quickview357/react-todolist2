import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortAlphaUp,faSortAlphaDown, faCheck } from '@fortawesome/free-solid-svg-icons';
class Sort extends Component {
  constructor(props) {
    super(props);
    this.state={
      dropDownItemValue: -1
    }
  }

  onSort(sortBy, sortDirection, dropDownItemValue){
    this.setState({dropDownItemValue});
    this.props.onSort(sortBy, sortDirection);
  }
  render() {
    let { dropDownItemValue } = this.state;
    let selectedIcon = <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>

    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Sort
              </Dropdown.Toggle>

              <Dropdown.Menu>
                  <Dropdown.Item onClick={()=>this.onSort('name','ASC',1)}><FontAwesomeIcon icon={faSortAlphaUp}/> Name A-Z  {dropDownItemValue === 1 ? selectedIcon : ''}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.onSort('name','DESC',2)}><FontAwesomeIcon icon={faSortAlphaDown}/> Name Z-A  {dropDownItemValue === 2 ? selectedIcon : ''}</Dropdown.Item>
                  <Dropdown.Divider></Dropdown.Divider>
                  <Dropdown.Item onClick={()=>this.onSort('status','ASC',3)}>Active Status  {dropDownItemValue === 3 ? selectedIcon : ''}</Dropdown.Item>
                  <Dropdown.Item onClick={()=>this.onSort('status','DESC',4)}>Deactive Status  {dropDownItemValue === 4 ? selectedIcon : ''}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
    );
  }
}

export default Sort;