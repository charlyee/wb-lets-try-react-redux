import { AppEvents } from "./events";
import { IAction } from './actions';

const initState = {
  message: 'Starting message.'
};

export interface IState {
  message: string;
}

export const reducer = ( state: IState = initState, action: IAction ): IState => {
  switch ( action.type )
  {
    case AppEvents.UPDATE_MESSAGE:
      return { ...state, message: action.payload }
    default:
      return state;
  }
}
