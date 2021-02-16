import React from 'react';
// import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      LOdropdown: false
    }

    this.toggleLODropdown = this.toggleLODropdown.bind(this);
  }

  toggleLODropdown() {
    if(!this.state.LOdropdown) {
      this.setState({LOdropdown: true})
    } else {
      this.setState({LOdropdown: false})
    }
  }

  render() {
    let dropdownClass = this.state.LOdropdown ? 'LOdropdown-open' : 'LOdropdown-hidden'
    return (
        <div className='sidebar-user'>
          <div onClick={this.toggleLODropdown}className='user-info'>
              <i className="fas fa-user-circle"></i>
              <h2>{this.props.currentUser.email}</h2>
              <i className="fas fa-angle-down"></i>
          </div>
          <button className={dropdownClass} onClick={this.props.logout}>
            Sign out 
          </button>
        </div>
    )  
  }
}

export default Greeting;