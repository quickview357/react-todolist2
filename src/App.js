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
      isDisplayForm: false,
      filters: {
        name: '',
        status: -1
      },
      sort:{
        sortBy:'name',
        sortDirection:'ASC'
      }
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
      isDisplayForm: false
    });
  }

  onOPenForm(){
    this.setState({
      isDisplayForm: true
    });
  }

  onSubmit = (data)=>{
    var {tasks} = this.state;
    if (data.id===''){
      data.id=this.generateID();
      tasks.push(data);
    }
    else{
      let x = tasks.filter(o=>o.id===data.id);
      if (x.length > 0){
        x[0].name=data.name;
        x[0].status=data.status;
      }
    }
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdateStatus = (task)=> {
    console.log(task);
    let tasks = this.state.tasks;
    let editingTask = tasks.filter(o => o.id===task.id);
    editingTask[0].status = !editingTask[0].status
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onDelete = (task)=>{    
    let {tasks} = this.state;
    let deletingTask = tasks.filter(o => o.id===task.id);
    let index = tasks.indexOf(deletingTask[0]);
    tasks.splice(index, 1);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.onCloseForm();
  }

  onEdit=(task) => {
    this.setState({
      task //like ES5 {taks: task}
    });
    this.onOPenForm();
  }

  onAdd=(e) => {    
    //create new task
    let task = {
      id:'',
      name: '',
      status: false
    };
    //set new task to sate
    this.setState({
      task: task
    });
    //or new way to write: 
    //this.setState({task})
    this.onOPenForm();
  }

  onFilter = (filters)=>{
     this.setState({
       filters: filters
     });
  }

  onSort = (sortBy, sortDirection)=>{
    let sort = {
      sortBy, sortDirection
    }
    this.setState({sort});
  }
  
  render() {
    //get state varible
    var {tasks, isDisplayForm, filters, sort} = this.state;    
    
    //filter
    if (filters.name !== ''){
      tasks = tasks.filter(o => o.name.toLowerCase().indexOf(filters.name.toLowerCase()) !== -1);
    }
    if (parseInt(filters.status) !== -1){
      let _status = parseInt(filters.status) === 1 ? true : false;
      tasks = tasks.filter(o => o.status === _status);
    }

    //sort
    tasks = tasks.sort(function(a,b){
      if (sort.sortDirection === 'ASC'){
        return a[sort.sortBy] > b[sort.sortBy] ? 1: -1;
      }
      else {
        return a[sort.sortBy] < b[sort.sortBy] ? 1: -1;
      }
    });

    //return
    return (
      <div className="container">
          <div className="row">
            <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>              
              {
                !isDisplayForm ?'' : <TaskForm 
                                        onCloseForm={() => this.onCloseForm()} 
                                        onSubmit={this.onSubmit}
                                        onEdit={this.onEdit}
                                        task={this.state.task}
                                      />
              }
            </div>
            <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
              <div className="card border-primary mb-3" style={{maxWidth: '100%'}}>
                  <div className="card-header">
                    Task List
                    <span className="close"><FontAwesomeIcon icon={faTimes} /></span>                  
                  </div>
                  <div className="card-body text-primary">
                      <button type="button" className="btn btn-primary mb-2" onClick={this.onAdd}><FontAwesomeIcon icon={faPlus} /> Add Task</button>
                      {/* <button type="button" className="btn btn-success mb-2" onClick={() => this.onGenerateData()}>
                        <FontAwesomeIcon icon={faPlus} /> 
                        Generate
                      </button> */}
                      <Control onSort={this.onSort}></Control>
                      <TaskList 
                        tasks={tasks} 
                        onUpdateStatus={this.onUpdateStatus}
                        onDelete = {this.onDelete}
                        onEdit={this.onEdit}
                        onFilter={this.onFilter}
                        >                        
                      </TaskList>
                  </div>
                </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;