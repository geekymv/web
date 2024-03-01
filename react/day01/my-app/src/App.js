import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello
 from './components/Hello';
function App() {
  return (
    <div className="App">
     <Greet name="jack" age="20">
      <p>this is children props</p>
     </Greet>
     <Greet name="lily" age="18"/>
     <Greet name="tony" age="22"/>

     <Welcome name="jack" age="20"/>
     <Welcome name="lily" age="18"/>
     <Welcome name="tony" age="22"/>
     {/* <Hello/> */}
    </div>
  );
}

export default App;
