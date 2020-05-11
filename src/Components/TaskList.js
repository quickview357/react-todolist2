import React, { Component } from 'react';
import TaskItem from './TaskItem';
class TaskList extends Component {
  onUpdateStatus = (task)=> {
    this.props.onUpdateStatus(task);
  }

  onDelete = (task)=>{
    this.props.onDelete(task);
  }

  render() {
    var {tasks} = this.props;
    var taskItemElement = tasks.map((task, index)=>{
      return <TaskItem 
                key={task.id} 
                index={index+1} 
                task={task} 
                onUpdateStatus={this.onUpdateStatus}
                onDelete = {this.onDelete}
              >
              </TaskItem>
    });
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
            {taskItemElement}
          </tbody>
        </table>
    </div>      
    );
  }
}

export default TaskList;