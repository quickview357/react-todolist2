import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch } from '@fortawesome/free-solid-svg-icons';
class Search extends Component {
  render() {
    return (
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="input-group mb-2 mr-sm-2">
                <input type="text" className="form-control" placeholder="task info ..." />
                <div className="input-group-prepend">
                <div className="input-group-btn">
                    <button className="btn btn-primary" type="button" onClick={this.onSearch}>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> Search
                    </button>                       
                </div>
            </div>
            </div>
        </div>
    );
  }
}

export default Search;