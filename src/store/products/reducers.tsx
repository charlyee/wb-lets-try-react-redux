import { Reducer } from 'redux';
import { ProductActions, ProductActionTypes } from './actions';

//what is a product?
export interface IProduct {
    name: string,
    description: string,
    stock: number
}

//define the state
export interface IProductState {
    readonly products: IProduct[]
}

// default populated state value (empty array, in this case)
const initialProductState: IProductState ={
    products: []
}

export const productReducer: Reducer<IProductState, ProductActions> = ( state = initialProductState, action ) => {
    switch ( action.type )
    {
        case ProductActionTypes.GET_ALL:
            return {
                ...state, // spread operator.
                //charaters: action.products
            }
            case ProductActionTypes.GET_ONE:
            return {
                ...state, // spread operator.
                //charaters: action.products
            }
        default:
            return state;
    }
}