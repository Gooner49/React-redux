import React , {Component , useState } from 'react'
import {connect} from "react-redux";
import './Counter.css'
import SubCounter from './SubCounter';
import courseActions from './Redux/actions/courseActions';
//import Counter from  './Counter'
import PropTypes from 'prop-types';
const mapStateToProps = (state) =>
{
    
    return {
      names : state.Name
    };
}
const Counter = ({names}) => 
{

   const [idty, setIdty] = useState ({  Name:  'Picasso', Surname: ''   });
   const handlechange1 = (e) => 
   {
    // var incr = e.target.value;
     console.log('Hello Sir from Counter.handlechange1  :  '  );
    /* this.setIdty(
     {
       ...idty ,
       Name : e.target.value
     });*/
   }
   
 // render () 
 // {
  /*const originalArr = [
                            {vendor: 2001, bananas: 50, apples:75, oranges: 12},
                            {vendor: 2002, bananas: 25, apples:60, oranges: 82},
                            {vendor: 2003, bananas: 36, apples:41, oranges: 73},
                            {vendor: 2004, bananas: 59, apples:62, oranges: 87}
                     ];
*/
 //   console.log('Hello from counter render' +this.props);
    
   
     return (

      <div>
        <div>
          <h1>Valhalla </h1>
        </div>
         {/* <div className="App">
             <SubCounter by={9} incrementMethod = {this.cIncrement}></SubCounter>
             <SubCounter by={6} incrementMethod = {this.cIncrement}></SubCounter>
             <SubCounter by={5} incrementMethod = {this.cIncrement}></SubCounter>
             <span className="Display">{this.state.counter}</span>
          </div> */}
           <div className="Formsubmit">
              <form>
                <h2> Courses </h2>
                <h3> Add Course </h3>
                <label> Enter your name : </label>
                   <input type = "text"  onChange= { handlechange1 }  placeholder=  {"UserName"} name= {idty.Name}   />  
                </form>  
                <div> <br /> </div>
                 <button  className="button1"  onClick={} type= "button"> Login </button> 
               {/* <h4> Current Name : {idty.Name}</h4>*/}
                <h4> Current Name : {names}</h4>  
           </div>  
      </div>    
      );

}


const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching actions returned by action creators
    
    increment: (fName) => dispatch(increment()),
   // decrement: () => dispatch(decrement()),
   // reset: () => dispatch(reset()),
  }
}

const increment = (fName) => 
(
  { 
    type: 'CREATE_COURSE' , 
    payload : fName
  }
)



//export default connect( mapStateToProps , mapDispatchToProps )  (Counter);
export default connect( mapStateToProps )  (Counter);