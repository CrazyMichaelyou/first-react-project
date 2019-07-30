import React from 'react';
import Hello from './components/Hello';
import Gallery from './components/gallery'
import Article from './components/Article'

function App() {
  return (
    <div className="App">
        {/* {<Hello language="en" name="Michael"/>
        <Hello language="zh" name="Alex"/>
        <Hello language="zh" name="Peter"/>} */}
        { <Gallery/> }
        <Article/>
    </div>
  );
}

export default App;

//import react
//write your functional component
//return JSX
//export it 
//import it to app
