import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
class TaskItem extends Component {

  onUpdateStatus = ()=> {
    this.props.onUpdateStatus(this.props.task);
  }

  onDelete = ()=>{
    this.props.onDelete(this.props.task);
  }

  onEdit=() => {
    this.props.onEdit(this.props.task);
  }

  render() {
    let {index, task} = this.props;
    return (
      <tr>
        <th scope="col">{index}</th>
        <th scope="col">{task.name}</th>
        <th scope="col">
          {
            <span className={task.status ? 'btn btn-xs btn-success btn-block' :'btn btn-xs btn-warning btn-block'}
              onClick={this.onUpdateStatus}>
              {task.status ? 'Active' :'Deactive'}
            </span>              
          }
        </th>
        <th scope="col">
          <div className="col col-lg-8">
              <button className="btn btn-warning mr-1" onClick={this.onEdit}><FontAwesomeIcon icon={faEdit}></FontAwesomeIcon> Edit</button>
              <button className="btn btn-danger" onClick={this.onDelete}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Delete</button>
          </div>
        </th>
      </tr>
    );
  }
}
export default TaskItem;