import React, { Component } from 'react';
import TaskItem from './TaskItem';
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: '',
      filterStatus: -1
    }
  }

  onUpdateStatus = (task)=> {
    this.props.onUpdateStatus(task);
  }

  onDelete = (task)=>{
    this.props.onDelete(task);
  }

  onEdit=(task) => {
    this.props.onEdit(task);
  }

  onChange=(event)=>{
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value
    });
    this.props.onFilter(
      name==="filterName"?value: this.state.filterName,
      name==="filterStatus"? value : this.state.filterStatus
    );
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
                onEdit = {this.onEdit}
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
            <tr>
              <td></td>
              <td>
                  <input
                      type="text"
                      className="form-control"
                      name="filterName"
                      onChange={ this.onChange }
                      value={ this.state.filerName }
                  />
              </td>
              <td>
                  <select
                      className="form-control"
                      name="filterStatus"
                      onChange={ this.onChange }
                      value={ this.state.filerName }
                  >
                      <option value={-1}>All</option>
                      <option value={0}>Deactive</option>
                      <option value={1}>Active</option>
                  </select>
              </td>
              <td></td>
          </tr>
            {taskItemElement}
          </tbody>
        </table>
    </div>      
    );
  }
}

export default TaskList;