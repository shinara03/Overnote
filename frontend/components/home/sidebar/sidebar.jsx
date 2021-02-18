import React from 'react';
import Greeting from '../greeting/greeting';
import { Link } from 'react-router-dom';
import NotebookSidebar from './notebook_sidebar';

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdown: false,
      caret: false
    };

    // this.toggleListDropdown = this.toggleListDropdown.bind(this);
  }

  toggleListDropdown() {
    if (!this.state.dropdown) {
      this.setState({ dropdown: true })
    } else {
      this.setState({ dropdown: false })
    }
  }

  toggleCaret() {
    if (!this.state.caret) {
      this.setState({ caret: true })
    } else {
      this.setState({ caret: false })
    }
  }

  render() {
    let caretClass = this.state.caret ? 'caret-down' : 'caret-right';
    let dropdownClass = this.state.dropdown ? 'sidebar-list-open' : 'sidebar-list-hidden';
    let caretIcon;

    if (caretClass === 'caret-down') {
      caretIcon = <div className={caretClass}><i className="fas fa-caret-down"></i></div>
    } else {
      caretIcon = <div className={caretClass}><i className="fas fa-caret-right"></i></div>
    }
    return (
      <div className='sidebar'>
        <Greeting currentUser={this.props.currentUser} logout={this.props.logout} />
        <div className='sidebar-lists'>
          {/* <div className='sidebar-home'>
            <Link className='sidebar-home-link' to='/home'>
              <i className="fas fa-home"></i>
              Home
            </Link>
          </div> */}
          <div>
            <Link className='sidebar-notes-link' to='/notes'>
              {/* <i className="far fa-sticky-note"></i> */}
              <i className="fas fa-sticky-note"></i>
              All Notes
            </Link>
          </div> 
          <div className='sidebar-notebooks-text'>
            {/* <div onClick={() => {
                    this.toggleListDropdown();
                    this.toggleCaret();
            }}>
            {caretIcon}
            </div> */}
            <Link className='sidebar-nb-link' to='/notebooks'>
              <i className="fas fa-book"></i>
              Notebooks
            </Link>
          </div>
          <div className={dropdownClass}>
            <NotebookSidebar />
          </div>  
        </div>
  
      </div>
    ) 
  }
}

export default SideBar;