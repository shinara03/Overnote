import React from 'react';

class DemoUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "shin1@gmail.com",
      password: "123456"
    }
    
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const demo = Object.assign({}, this.state);
    this.props.demoLogin(demo).then(() => this.props.history);
  }

  render() {
    return (
      <button className='demo-button' onClick={this.handleClick}>
        Continue with Demo User 
      </button>
    )
  }
}

export default DemoUser;