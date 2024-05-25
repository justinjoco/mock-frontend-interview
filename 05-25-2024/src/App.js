import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
/*
// Create a vending machine function that takes in a list of items and a list of coins.
// The vending machine should allow the user to select an item and insert coins to pay for the item.
// The vending machine should return the item and change if the user has inserted enough money.
// If the user has not inserted enough money, the vending machine should return the coins that were inserted.
2 quarters, then we return 2 quarters
// The vending machine should also return the item and any remaining change if the user has inserted more money than the item costs
 
UI that represents vending machine
- Inserts coins
- User should be able to select an item
- Submit button -> checks money against the total cost
- When item is submitted, return item if total inserted exceeds cost and any remaining change
- If total inserted is less, then return the coins inserted
- User can keep inserting more and more coins (ie has infinite amount of coins)
- Infinite amount of each item

1 component
We display each item and their costs

1 component 
We can a button for each insertion of a coin
Insert Nickel, Insert Dime, Insert Quarter

1 component
Keep track of running total and display it

1 component
Submit button
*/

const testdata = {
  items: [
      {
          name: 'Candy',
          price: 1.00
      },
      {
          name: 'Soda',
          price: 1.50
      },
      {
          name: 'Chips',
          price: 2.00
      }
  ],
  coins: [
      {
          name: 'Nickel',
          value: 0.05
      },
      {
          name: 'Dime',
          value: 0.10
      },
      {
          name: 'Quarter',
          value: 0.25
      }
  ]
}

function App() {
  
  //States
  const [total, setTotal] = useState(0)
  const [coinsUsed, setCoinsUsed] = useState({})
  const [submitDisplay, setSubmitDisplay] = useState("Submit display")

  // Item display
  const itemDisplays = testdata.items.map(item => <div>
    <h2>{item.name}</h2>
    <p>{item.price}</p>
    <button value={item.price} onClick={e => handleItemButtonClick(e)}>Buy {item.name}</button>
    </div>
)

  function handleCoinClick(event){
    const coinValue = Number(event.target.value)
    setTotal(total + coinValue)
    const newCoinsUsed = {...coinsUsed}
    const numCoins = newCoinsUsed[coinValue] 
    if (!numCoins){
      newCoinsUsed[coinValue] = 1
    } else{
      newCoinsUsed[coinValue] += 1
    }
    setCoinsUsed(newCoinsUsed)
  }

  function handleItemButtonClick(event){
    console.log(event.target.value)
    console.log(`Running total: ${total}`)
    const itemValue = Number(event.target.value)
    if (total >= itemValue){
      setSubmitDisplay(`You have bought this item! Your change is ${(total - itemValue).toFixed(2)}`)
    } else{
      let returnStr = ""
      for (let coin in coinsUsed){
        returnStr += `Coin value: ${coin}, number used: ${coinsUsed[coin]}\n`
      } 
      if (returnStr === ""){
        returnStr = "No coins have been inserted"
      }
      setSubmitDisplay(`You do not have enough money! ${returnStr}`)
    }
    setTotal(0)
    setCoinsUsed({})
  }

  // Coin buttons -> onclick event
  const coinButtons = testdata.coins.map(coin => <div>
    <button value={coin.value} onClick={e => handleCoinClick(e)}>
      Insert coin {coin.name} with value {coin.value}
    </button>
  </div>)

  // Running total
  const runningTotal = <div>
    <h1>Total: {total.toFixed(2)}</h1>
  </div>


  return (
    <div className="App">
      <h1>Vending Machine</h1>
     {itemDisplays}
     {coinButtons}
     {runningTotal}
     <div>{
      submitDisplay
      }</div>
    </div>
  );
}

export default App;
