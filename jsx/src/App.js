function App(){
    //code to compute value
    // thing we want to show
    return(
        <input placeholder="hi there" />   
    );
}


// only 1 default export allowed
export default App; // share variable to other files  


//named export cant be renamed in other files
const message = 'hi';
export {message};