  
import { ActionCreator } from 'redux';

// Set action "names" as constants.
export enum ProductActionTypes {
    GET_ALL = 'GET_ALL',
    GET_ONE = 'GET_ONE'
}

// Interface for our first action type.
export interface IProductGetAllAction {
    type: ProductActionTypes.GET_ALL
}

// Interface for our second action type.
export interface IProductGetOneAction {
    type: ProductActionTypes.GET_ONE
}

// Gathering all of the actions.
export type ProductActions = IProductGetAllAction | IProductGetOneAction;