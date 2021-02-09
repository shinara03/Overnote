import { connect } from 'react-redux';
import Greeting from './greeting';

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

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)