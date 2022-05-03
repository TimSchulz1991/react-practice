import logo from './logo.svg';
import './App.css';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreeting from './components/StatefulGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="Nice to meet you!" />  */}
      <StatefulGreetingWithPrevState />
    </div>
  );
}

export default App;
