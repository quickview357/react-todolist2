import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import TaskForm from './Components/TaskForm';
import Control from './Components/Control';
import TaskList from './Components/TaskList';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      isDisplayForm: false
    }    
  }

  componentDidMount(){
    if (localStorage && localStorage.getItem('tasks')){
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      });
    }    
  }

  s4(){
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID(){
    return this.s4() + "-" + this.s4() + "-" + this.s4() + '-' + this.s4();
  }

  onGenerateData(){
    var tasks = [
      {
        id: this.generateID(),
        name: 'C#',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Javasript',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Adnroid',
        status: false
      }
    ];    
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onToggleForm(){
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    });
  }
  
  onCloseForm(){
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    });
  }
  
  render() {
    var {tasks, isDisplayForm} = this.state;
    return (
      <div className="container">
          <div className="row">
            <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>              
              {!isDisplayForm ?'' : <TaskForm onCloseForm={() => this.onCloseForm()}/>}
            </div>
            <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
              <div className="card border-primary mb-3" style={{maxWidth: '100%'}}>
                  <div className="card-header">
                    Task List
                    <span className="close"><FontAwesomeIcon icon={faTimes} /></span>                  
                  </div>
                  <div className="card-body text-primary">
                      <button type="button" className="btn btn-primary mb-2" onClick={()=> this.onToggleForm()}><FontAwesomeIcon icon={faPlus} /> Add Task</button>
                      {/* <button type="button" className="btn btn-success mb-2" onClick={() => this.onGenerateData()}>
                        <FontAwesomeIcon icon={faPlus} /> 
                        Generate
                      </button> */}
                      <Control></Control>
                      <TaskList tasks={tasks}></TaskList>
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;