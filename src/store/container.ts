import { App as Component } from '../components/App';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Dispatch } from 'react';
import { updateMessage } from './todo/events';
import { IAction } from './todo/actions';
import { IAppState } from '.';

const mapStateToProps = ( state: IAppState ) => {
  return {
    message: state.app.message
  }
}

const mapDipatchToProps = ( dispatch: Dispatch<IAction> ) => {
  return {
    onClick: () => dispatch( updateMessage( 'New message.' ) )
  }
}

export const App = compose( connect(
  mapStateToProps,
  mapDipatchToProps
) )( Component );
