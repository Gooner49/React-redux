// import createSlice from '@reduxjs/toolkit'
import createSlice from '@reduxjs/toolkit';
import * as types from  '../Actions/types'

const initialState = {value : 0};

const countSlice =  (state = initialState , action) => 
{

    switch(action.type)
    {
        case types.ADD_BOOK :
        console.log ("ddddddd   : " +state);
        const newValue = state + 1;
        return  newValue;
        break;

        case types.DELETE_BOOK :
        const newValue1 = state - 1;
        return newValue1;
        break;

        default:
            return 912;
            break;
    }
};
export default countSlice;


