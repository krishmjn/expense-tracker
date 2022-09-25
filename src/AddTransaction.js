import React , {useContext, useState}from 'react'
import { GlobalContext } from './Context/Globalstate';
import {v4 as uuidv4} from "uuid"

const AddTransaction = () => {
    const[text,setText]=useState('');
    const [amount,setAmount]=useState(0)
    const {addTransaction}=useContext(GlobalContext)
    const onSubmit=e=>{
e.preventDefault();
const newTransaction={
  id:uuidv4(),
  text,
  amount:+amount
}
addTransaction(newTransaction)
    }
  return (
    <div>
        <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label for="text">Text</label>
          <input type="text" value={text} onChange={(event)=>setText(event.target.value)} id="text" placeholder="Enter text..." />
        </div>
        <div className="htmlForm-control">
          <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(event)=>setAmount(event.target.value)} id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>

  )
}

export default AddTransaction