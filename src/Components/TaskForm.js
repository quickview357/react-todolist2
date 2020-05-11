import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faTimes, faSave } from '@fortawesome/free-solid-svg-icons';

class TaskForm extends Component {
  constructor(props) {
      super(props);
      this.state = {
          name: '',
          status: false
      }
  }
  
  onHandleChange = (event)=>{
    const target = event.target;
    const name = target.name;
    let value = target.value;
    if (name==="status"){
        value = value==="true" ? true : false;
    }
    this.setState({
        [name] : value
    });
  }   

  onCloseForm(){
      this.props.onCloseForm();
  }

  onSubmit = ()=>{
     this.props.onSubmit(this.state);
     this.onClear();
     this.onCloseForm();
  }

  onClear = ()=> {
      this.setState({
          name: '',
          status: false
      });
  }

  render() {
    return (
        <div className="card border-primary mb-3" style={{maxWidth: '100%'}}>
            <div className="card-header">
                Add task
                <span className="close" onClick={() => this.onCloseForm()}><FontAwesomeIcon icon={faTimes} /></span>                  
            </div>
            <div className="card-body text-primary">
                <form>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Taks</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name" 
                            value={this.state.name}
                            onChange={this.onHandleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Status</label>
                        <select 
                            className="custom-select my-1 mr-sm-2" 
                            name="status" 
                            value={this.state.status} 
                            onChange={this.onHandleChange}
                        >
                            <option value={true}>Active</option>
                            <option value={false}>Deactive</option>
                        </select>
                    </div>                    
                </form>
            </div>
            <div className="card-footer text-right">                
                <button onClick={()=>this.onCloseForm()} className="btn btn-md btn-danger mr-1"><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon> Cancel</button>
                <button onClick={this.onSubmit} className="btn btn-md btn-success"><FontAwesomeIcon icon={faSave}></FontAwesomeIcon> Save</button>
            </div>
        </div>        
    );
  }
}

export default TaskForm;