import React from 'react'
import './Modal.css'

//
// старый способ работы с React через наследование от React.Component
//
export default class Modal extends React.Component {
  state = {
    isOpen: false,
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={()=>{this.setState({isOpen: true})}}>Open modal</button>
        {this.state.isOpen && (
          <div className="modal">
            <div className="modal-body">
              <h3>Modal windows</h3>
              <p>Modal windows are!!!</p>
              <button onClick={()=>{this.setState({isOpen: false})}}>Close modal</button>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}