import React, { Component } from 'react';
import TaskItem from './TaskItem';
class TaskList extends Component {
  render() {
    return (
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <TaskItem></TaskItem>
          </tbody>
        </table>
    </div>      
    );
  }
}

export default TaskList;