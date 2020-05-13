import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
class Control extends Component {
  onSort=(sortBy, sortDirection)=>{
    this.props.onSort(sortBy, sortDirection);
  }
  render() {
    return (
        <div className="row">
            {/* Search */}
            <Search></Search>
            {/* Sort */}
            <Sort onSort={this.onSort}></Sort>
        </div>
    );
  }
}
export default Control;