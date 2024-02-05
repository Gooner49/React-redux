import {combineReducers} from 'redux';
import courseReducer from './courseReducer';
/*
    const rootReducer = combineReducers({
        courseReducer
    });
export default rootReducer;
*/
const rootReducer = () => 
{
    const mReducer = combineReducers({
        courseReducer
    });

    return mReducer;
}

export default rootReducer;
