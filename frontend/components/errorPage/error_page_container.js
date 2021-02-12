import { connect } from 'react-redux';
import ErrorPage from './error_page';


const mapStateToProps = (state) => {
  const sessionId = state.session.id;
  return {
    currentUser: state.entities.users[sessionId]
  }
}

export default connect(mapStateToProps)(ErrorPage);
