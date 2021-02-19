import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import LoginFormContainer from './session/session_form/login_form_container';
import SignupFormContainer from './session/session_form/signup_form_container';
import {ProtectedRoute, AuthRoute} from '../util/route_util';
// import NavBarContainer from './splash/navbar/navbar_container';
// import SideBarContainer from './home/sidebar/sidebar_container';
import ErrorPage from './errorPage/error_page';
import NotebookIndexContainer from './home/notebooks/notebook_index_container';
import Modal from './modal/modal';
import NoteIndexContainer from './home/notes/note_index_container';
import NotebookShowContainer from './home/notebooks/notebook_show_container';
import NoteShowContainer from './home/notes/note_show_container';
import NoteEditContainer from './home/notes/note_eidt_container';
import Splash from './splash/splash';
// import HomePage from './home/homepage';

const App = () => {
  return (
    <>
      <Modal />
      <Switch>
        <Route exact path='/' component={Splash}/>
        {/* <ProtectedRoute exact path='/home' component={HomePage}/> */}
        <ProtectedRoute path='/notes' component={NoteIndexContainer} />
        {/* <ProtectedRoute path='/notes/:noteId' component={NoteEditContainer} /> */}
        <ProtectedRoute exact path='/notebooks' component={NotebookIndexContainer}/>
        <ProtectedRoute path='/notebooks/:notebookId' component={NotebookShowContainer} />
        {/* <Route exact path='/notebooks/:notebookId/:noteId' component={NoteShow} /> */}
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />

        <Route exact path="/404" component={ErrorPage} />
        <Redirect to='/404' />
      </Switch>
  
      <ProtectedRoute path='/notes/:noteId' component={NoteEditContainer} />
      {/* <ProtectedRoute path='/notebooks/:notebookId/:noteId' component={NoteShowContainer} />  */}
      <ProtectedRoute path='/notebooks/:notebookId/:noteId' component={NoteEditContainer} /> 

    </>
  )
}

export default App;