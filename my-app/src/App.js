import logo from './logo.svg';
import './App.css';
import StatefulGreeting from './components/StatefulGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="Nice to meet you!" />  */}
      <StatefulGreeting greeting="What's up?" name="Tim"/>
    </div>
  );
}

export default App;
