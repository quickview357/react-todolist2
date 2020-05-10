import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
class Control extends Component {
  render() {
    return (
        <div className="row">
            {/* Search */}
            <Search></Search>
            {/* Sort */}
            <Sort></Sort>
        </div>
    );
  }
}
export default Control;