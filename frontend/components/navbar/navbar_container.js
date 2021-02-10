import { connect } from 'react-redux';
import Navbar from './navbar';
import { logout } from '../../actions/session_actions'

const mapStateToProps = (state) => {
  const sessionId = state.session.id;
  return {
    currentUser: state.entities.users[sessionId]
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)