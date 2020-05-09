import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import {Dropdown} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      
      <div className="container">
          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
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
            </div>

            
            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <div className="card border-primary mb-3" style={{maxWidth: '100%'}}>
                  <div className="card-header">
                    Task List
                    <span className="close"><FontAwesomeIcon icon={faTimes} /></span>                  
                  </div>
                  <div className="card-body text-primary">
                        
                      <button type="button" className="btn btn-primary mb-2"><FontAwesomeIcon icon={faPlus} /> Add Task</button>

                      <div className="row">
                        
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <div className="input-group mb-2 mr-sm-2">
                                <input type="text" className="form-control" placeholder="task info ..." />
                                <div className="input-group-prepend">
                                  <div className="input-group-btn">
                                    <button className="btn btn-primary" type="button" onClick={this.onSearch}>
                                      <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon> Search
                                    </button>                       
                                  </div>
                              </div>
                            </div>
                        </div>
                        
                        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            <Dropdown>
                              <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Sort
                              </Dropdown.Toggle>

                              <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                        </div>

                     </div>
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
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                      
                      
                      
                      
                                            
                  </div>
                  
                </div>
            </div>
          </div>



          
        </div>
        
        

        

        
       
        
        
        

      
      
    );
  }
}

export default App;