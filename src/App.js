import React, {useState} from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import './App.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

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
        <input type='number' name='number' maxLength='16' placeholder='Card Number' value={cNumber} onChange={ e => setNumber(e.target.value)} onFocus={ e => setFocus(e.target.name)} />
        <br/>

        <label style={{margin:"10px", float:"left"}}>Card Name</label>
        <input type='text' name='name' placeholder='Name' value={cName} onChange={ e => setName(e.target.value)} onFocus={ e => setFocus(e.target.name)} />
        <br/>
        <table>
        <tr>
          <td style={{width:"70%"}}>
            <label style={{margin:"10px", float:"left"}}>Expiration Date</label>
            <input style={{width:"90%"}} type='tel' name='expiry' maxLength='7' placeholder='MM/YY Expiry' value={cExpiry} onChange={ e => setExpiry(e.target.value)} onFocus={ e => setFocus(e.target.name)} />
          </td>
          <td>
            <label style={{margin:"10px", float:"left"}}>CVV</label>
           <input  type='password' name='cvc' maxLength='4' placeholder='CVC' value={cCvv} onChange={ e => setCvv(e.target.value)} onFocus={ e => setFocus(e.target.name)} />
           </td>
          </tr>
      </table>
        <button className="Button" onClick={()=>{
         toast('Submitted') 
         console.log("Submit")
        }}>Submit</button>
      </form>
      </div>
    </div>
  );
}

export default App;
