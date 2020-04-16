import { AppEvents } from './events';

const makeAction = <T extends AppEvents, P>(type: T) => ( payload: P ) => {
  return {
    type,
    payload
  }
}

export const updateMessage = makeAction<AppEvents.UPDATE_MESSAGE, string>( AppEvents.UPDATE_MESSAGE );

interface IStringMap<T> {
  [key: string]: T
}
type IAnyFunction = ( ...args: any[] ) => any;
type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;

const actions = {
  updateMessage
}

export type IAction = IActionUnion<typeof actions>;
