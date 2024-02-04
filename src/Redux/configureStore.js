//import {combineReducers} from 'redux';
import createStore from './actions/courseActions';
//import reduxImmutableStateInvariant from 'react-redux';
import rootReducer from './reducers/index';

const configureStore = (initialState ) => 
{
   return createStore ( rootReducer ,initialState  );
}

export default configureStore ;


