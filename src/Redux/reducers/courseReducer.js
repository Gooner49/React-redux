import React , {Component, useState} from 'react';
import axios from "axios";
//import './Counter.css';
//import SubCounter from './SubCounter';
const courseReducer = (state = [] , action) => 
{
    switch (action.type)
    {
        case "CREATE_COURSE" :
            return [...state , {...action.course}];
        default  :
            return state;    
    }
}

export default courseReducer;

