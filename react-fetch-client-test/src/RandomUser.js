import {useState, useEffect} from 'react'

export function RandomUser(){
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
  
    function handleFetchRandomUserButton(){
      setShouldFetchUser(true)
    }
  
    return (
      <div>
        <h1>Random user</h1>
        <button onClick={() => {handleFetchRandomUserButton()}}>Fetch random user</button>
        <p>{userInfo}</p>
      </div>
    )
  }
  