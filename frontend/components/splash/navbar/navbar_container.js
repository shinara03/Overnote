import { connect } from 'react-redux';
import NavBar from './navbar';


const mapStateToProps = (state) => {
  const sessionId = state.session.id;
  return {
    currentUser: state.entities.users[sessionId]
  }
}

export default connect(mapStateToProps)(NavBar);
