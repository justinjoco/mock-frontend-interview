import logo from './logo.svg';
import './App.css';
/* https://httpbin.org/#/
https://httpbin.org/get
https://httpbin.org/put
https://httpbin.org/post
https://httpbin.org/delete

GET https://randomuser.me/api

Props: passes data and callback functions to different components
State: real-time data to use in current component

useEffect: triggers after a render (do not let a ref be a dependency) -> use to sync with external dependency like an API call
- Only use setState inside if the useEffect has empty dependencies (eg. there's only data fetching when the component first mounts); otherwise, an infinite loop might happen
- Cleanup useEffect in the return () => {do something}
- Cleanup is ran on old props and state, setup is ran on new props and state

createContext: use when passing down properties to children, especially if there are many levels
useContext: use to grab context of some parent, and use it to modify some property of current prop
*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
