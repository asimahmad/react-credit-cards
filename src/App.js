import React, {useState} from 'react'
import Cards from 'react-credit-cards'
import DatePicker from 'react-datepicker'
import 'react-credit-cards/es/styles-compiled.css'
import 'react-datepicker/dist/react-datepicker.css'
import './App.css';

function App() {
  const [cNumber, setNumber] = useState('')
  const [cName, setName] = useState('')
  const [cExpiry, setExpiry] = useState('')
  const [cCvv, setCvv] = useState('')
  const [cFocus, setFocus] = useState('')

  return (
    <div className="App">
      <Cards className="Card" number={cNumber} name={cName} expiry={cExpiry} cvc={cCvv} focused={cFocus} />
      <div className="divStyle">
      <form>
        <label style={{margin:"10px", float:"left"}}>Card Number</label>
        <input type='number' name='number' placeholder='Card Number' value={cNumber} onChange={ e => setNumber(e.target.value)} onFocus={ e => setFocus(e.target.name)} />
        <br/>

        <label style={{margin:"10px", float:"left"}}>Card Name</label>
        <input type='text' name='name' placeholder='Name' value={cName} onChange={ e => setName(e.target.value)} onFocus={ e => setFocus(e.target.name)} />
        <br/>
        <label style={{margin:"10px", float:"left"}}>Expiration Date</label>
        <input type='tel' name='expiry' placeholder='MM/YY Expiry' value={cExpiry} onChange={ e => setExpiry(e.target.value)} onFocus={ e => setFocus(e.target.name)} />
        <label style={{margin:"10px", float:"left"}}>CVV</label>
        <input  type='password' name='cvc' placeholder='CVC' value={cCvv} onChange={ e => setCvv(e.target.value)} onFocus={ e => setFocus(e.target.name)} />
        <button className="Button">Submit</button>
      </form>
      </div>
    </div>
  );
}

export default App;
