import React, {Component, component, useState } from 'react'
import { addBook,deleteBook } from './Actions/Actions';
import {connect,useSelector,useDispatch} from "react-redux";
import { ADD_BOOK } from './Actions/types';

const Redodux = () => 
{
    const [textline , setHead] = useState('');
    const count = useSelector(state => state.counterz);
    const dispatch = useDispatch();

    const handleChangecred = (e) =>
        { 
          //var incr = e.target.value;
          console.log('Hello number ');
          //console.log ('Handling changed user' );
          //setUser({...user, [e.target.name]: e.target.value });
        
        }

   
    return  (
       <div>
        {
            <div>
                    <header >
                            <p> Welcome 88888888999999999    </p>
                    </header>
                    <div>
                        <p>
                        Value ::  {count} 
                        </p>
                    </div>
                    <div>
                         <form>
                                <label for="fname">Enter login credentials </label>
                                <div> <br />   </div>
                                <input  placeholder = "UserName" name="username"  onChange={ handleChangecred }  />
                                <div> <br />   </div>
                                <button  className="button1" onClick={() => dispatch({type:'DELETE_BOOK'})}  type= "button"> -1 </button> 
                                <div> <br />   </div>
                                <button  className="button1" onClick={() => dispatch({type:'ADD_BOOK'})}  type= "button"> +1 </button> 
                        </form> 
                    </div>     
            </div>   
        }
        </div>
    );
}

export default Redodux;