import React, { Component } from 'react';
class TaskItem extends Component {
  render() {
    let {index, task} = this.props;
    return (
      <tr>
        <th scope="col">{index}</th>
        <th scope="col">{task.name}</th>
        <th scope="col">{task.status?'Yes':'No'}</th>
        <th scope="col"></th>
      </tr>
    );
  }
}
export default TaskItem;