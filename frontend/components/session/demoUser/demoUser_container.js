import {connect} from 'react-redux';
import {login} from '../../../actions/session_actions';
import demoUser from './demoUser';

const mapDispatchToProps = dispatch => {
  return {
    demoLogin: (user) => dispatch(login(user))
  }
}

export default connect(null, mapDispatchToProps)(demoUser);