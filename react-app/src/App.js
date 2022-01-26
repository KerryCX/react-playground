
import './App.css';
import {ExampleFunctionalComponent} from './components/ExampleComponent';
import {Activities} from './components/Activities';
import {StarWars} from "./components/StarWars";
import {Button} from "./components/Button.jsx";
import {ParentComponent} from "./components/Parent.jsx"

function App() {
  return (
    <div className="App">
        <h1>Hello World!</h1>
        <ParentComponent/>
        <Button/>
        <input placeholder="enter number">{}</input>
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

