import logo from './logo.svg';
import {useState, useEffect} from 'react'
import './App.css';
/* https://httpbin.org/#/
https://httpbin.org/get
https://httpbin.org/put
https://httpbin.org/post
https://httpbin.org/delete

GET https://randomuser.me/api

const [someState, setSomeState] = useState(initialValue) -> setSomeState causes rendering

const someRef = useRef(initialValue) -> not needed for rendering
oldValue = someRef.current -> reads current value of reference
someRef.current = newValue -> set new value of reference

Props: passes data and callback functions to different components
State: real-time data to use in current component

useEffect: triggers after a render (do not let a ref be a dependency) -> use to sync with external dependency like an API call
- Only use setState inside if the useEffect has empty dependencies (eg. there's only data fetching when the component first mounts); otherwise, an infinite loop might happen
- Cleanup useEffect in the return () => {do something}
- Cleanup is ran on old props and state, setup is ran on new props and state
useEffect (() => {
  setup code
}, [list of dependencies])


createContext: use when passing down properties to children, especially if there are many levels
const SomeContext = createContext(initalValue)

useContext: use to grab context of some parent, and use it to modify some property of current prop
const value = useContext(SomeContext)
*/
function App() {
  const [counter, setCounter] = useState(0)
  const [shouldFetchUser, setShouldFetchUser] = useState(false)
  const [userInfo, setUserInfo] = useState("No user fetched")

  useEffect(() => {
    async function fetchUser(){
      const response = await fetch("https://randomuser.me/api")
      const user = await response.json()
      setUserInfo(JSON.stringify(user))
    }

    if (shouldFetchUser){
      fetchUser()
    }

    return () => {
      setShouldFetchUser(false)
    }
  }, [shouldFetchUser])

  function handleIncrementCounterButton(){
    setCounter(counter => counter + 1)
  }
  function handleResetCounterButton(){
    setCounter(0)
  }

  function handleFetchRandomUserButton(){
    setShouldFetchUser(true)
  }
  return (
    <div className="App">
      <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => handleIncrementCounterButton()}>Increment counter</button>
      <button onClick={() => handleResetCounterButton()}>Reset counter</button>
      </div>
      <div>
        <h1>Random user</h1>
        <button onClick={() => {handleFetchRandomUserButton()}}>Fetch random user</button>
        <p>{userInfo}</p>
      </div>

    </div>
  );
}

export default App;
