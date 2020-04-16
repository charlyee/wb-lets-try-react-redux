export enum AppEvents {
  UPDATE_MESSAGE = 'APP/UPDATE_MESSAGE'
}

export const updateMessage = ( payload: string ) => {
  return {
    type: AppEvents.UPDATE_MESSAGE,
    payload
  }
}