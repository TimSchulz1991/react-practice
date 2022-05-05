import logo from './logo.svg';
import './App.css';
// import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
// import StatefulGreeting from './components/StatefulGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import LifeCyclesCDM from './components/LifeCyclesCDM';
import LifeCyclesCDU from './components/LifeCyclesCDU';
import LifeCyclesCWU from './components/LifeCyclesCWU';

function App() {
  return (
    <div className="App">
      {/* <FunctionalGreetingWithProps greeting="Nice to meet you!" />  */}
      {/* <StatefulGreetingWithPrevState />
      <LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      <LifeCyclesCWU />
    </div>
  );
}

export default App;
