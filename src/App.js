import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import TaskForm from './Components/TaskForm';
import Control from './Components/Control';
import TaskList from './Components/TaskList';

class App extends Component {
  render() {
    return (
      <div className="container">
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <TaskForm></TaskForm>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="card border-primary mb-3" style={{maxWidth: '100%'}}>
                  <div className="card-header">
                    Task List
                    <span className="close"><FontAwesomeIcon icon={faTimes} /></span>                  
                  </div>
                  <div className="card-body text-primary">
                      <button type="button" className="btn btn-primary mb-2"><FontAwesomeIcon icon={faPlus} /> Add Task</button>
                      <Control></Control>
                      <TaskList></TaskList>
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;