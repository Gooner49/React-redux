import React , {Component , useState } from 'react'
import './Counter.css'
import SubCounter from './SubCounter';
const Counter = () => 
{

    const [Idty, setIdty] = useState 
   ({
      Name :  ''
   });
    
   
  const originalArr = [
                            {vendor: 2001, bananas: 50, apples:75, oranges: 12},
                            {vendor: 2002, bananas: 25, apples:60, oranges: 82},
                            {vendor: 2003, bananas: 36, apples:41, oranges: 73},
                            {vendor: 2004, bananas: 59, apples:62, oranges: 87}
                     ];

    console.log('Hello from counter render');
    return (
      <div>
          <div className="App">
             <SubCounter by={9} incrementMethod = {this.cIncrement}></SubCounter>
             <SubCounter by={6} incrementMethod = {this.cIncrement}></SubCounter>
             <SubCounter by={5} incrementMethod = {this.cIncrement}></SubCounter>
             <span className="Display">{this.state.counter}</span>
          </div>
          <div className="Formsubmit">
              <form>
                <h2> Courses </h2>
                <h3> Add Course </h3>
                <label> Enter your name : </label>
                    <input type = "text"  onChange = {this.handlechange1} name ={this.state.Name}/>
              </form>  
          </div>
      </div>    
      );
  
  const cIncrement = (val) => 
  {
     console.log('Hello Sir from Counter.cIncrement');
     console.log('Trying to increase ' + this.state.counter + ' by a value of ' +val );
     // this.state.counter ++ ;
     this.setState(
     {
       counter : this.state.counter + val
     });
  }

  const handlechange1 = (e) => 
  {
    var incr = e.target.value;
    console.log('Hello Sir from Counter.handlechange1  :  '  +incr);
    this.setState(
    {
      ...Idty ,
      Name : e.target.value
    });
  }
  

}

export default Counter;