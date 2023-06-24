//import react and reactDOM lib
import React from "react";//defines components
import  ReactDOM  from "react-dom/client";//how we get a component to show in the browser
import App ,{message} from './App'; // import whats exported in other file.
//behind the scene:
//1.declare var 'App'
//2.find default export from App.js
//3.assign default export to the 'App' var

console.log(message)
//get a ref to the div with id='root'
const el = document.getElementById('root');

//tell react to control that element    
const root = ReactDOM.createRoot(el);

//create a component

//show it on the screen
root.render(<App />)