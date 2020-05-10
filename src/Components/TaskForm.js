import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTimes } from '@fortawesome/free-solid-svg-icons';

class TaskForm extends Component {
  render() {
    return (
        <div className="card border-primary mb-3" style={{maxWidth: '100%'}}>
            <div className="card-header">
            Add task
            <span className="close"><FontAwesomeIcon icon={faTimes} /></span>                  
            </div>
            <div className="card-body text-primary">
                <form>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput">Taks</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example label" />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Status</label>
                    <select className="custom-select my-1 mr-sm-2">
                    <option value={true}>Active</option>
                    <option value={false}>Deactive</option>
                    </select>
                </div>
                </form>
            </div>
            <div className="card-footer">
            <a href="/#" className="card-link">Save</ a>
            <a href="/#" className="card-link">Cancel</ a>
            </div>
        </div>        
    );
  }
}

export default TaskForm;