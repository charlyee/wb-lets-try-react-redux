import { createStore, Store, combineReducers } from 'redux';
import { productReducer, IProductState } from './reducers';

//interface for application state
export interface IAppState {
    productState: IProductState
}

//set a root reducer
const rootReducer = combineReducers<IAppState>({
    productState: productReducer
});

//global storage
export default function configureStore (): Store<IAppState, any> {
    const store = createStore( rootReducer );
    return store;
}