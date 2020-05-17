import React, { Component } from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: -1
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
    let filters = {
      name: name==='name'?value: this.state.name,
      status: name==='status'?value: this.state.status,
    };
    this.props.onFilter(filters);
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
                      name="name"
                      onChange={ this.onChange }
                      value={ this.state.name }
                  />
              </td>
              <td>
                  <select
                      className="form-control"
                      name="status"
                      onChange={ this.onChange }
                      value={ this.state.status }
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

const mapStateToProps = (state)=>{  
  return {    
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, null)(TaskList);