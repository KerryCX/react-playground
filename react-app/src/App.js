
import './App.css';
import {ExampleFunctionalComponent} from './components/ExampleComponent';
import {Activities} from './components/Activities';
import {StarWars} from "./components/StarWars";


function App() {
    console.log(exp(2))
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>You can simply have code in App.js in a paragraph like here but also</p>
        <Example
        x={"gosh"}/>
        <ExampleFunctionalComponent
        x={"this works"}/>
        <Activities/>
        <StarWars/>
    </div>
  );
}

export default App;

function Example(props){
  return(
      <>
        <p>
          call a function, with a prop in the App.js, to put a paragraph on screen.
          <br/>Simply showing how props will be shown here, props.x is: {props.x}
        </p>
      </>
  );

}

function exp (){
    let me = oi(1)
    return me;
}

function oi (a){
    return a+1;
}
