import React , {Component, useState} from 'react';
import axios from "axios";
//import './Counter.css';
//import SubCounter from './SubCounter';
const courseActions = (iName) => 
{
    return { type:"CREATE_COURSE", Name : iName }
}
export default courseActions;
