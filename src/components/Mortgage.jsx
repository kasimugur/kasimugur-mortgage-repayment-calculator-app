import { useState } from 'react'
import { iconCalculator, ilistrationEmpty } from '../page/page'
import '../scss/style.scss'
import { useEffect } from 'react'
import DefaultCard from './DefaultCard'
import ActiveCard from './ActiveCard'
import SiteContext from '../context/SiteContext'
import { classBg } from '../page/click'

export default function Mortgage() {


  const [mortgageTotal, setMortgageTotal] = useState('')
  const [mortgageTerm, setMortgageTerm] = useState('')
  const [interest, setInterest] = useState('')
  const [monthly, setMothly] = useState('')
  const [total, setTotal] = useState('')
  const [error, setError] = useState('')
  const [active, setActive] = useState('')
  function interestRate(sayi, yüzde) {
    Number(sayi)
    Number(yüzde)
    const topl = (sayi * yüzde / 100)
    return topl + sayi
  }


  const result = () => {
    if ((mortgageTerm && mortgageTotal && interest) === '') {
      setError('error')
      setActive('active')
    } else {
      setTotal(interestRate(mortgageTotal, interest))
      setMothly(total / mortgageTerm)
    }
  }

  const clear = () => {
    setTotal('')
    setMortgageTerm('')
    setMortgageTotal('')
    setInterest('')
    setError('')
    setMothly('')
    setActive('')
  }

  const data = {
    total,
    monthly
  }

  return (
    <>
      <SiteContext.Provider value={data} >
        <div className="container">
          <div className="card-item">
            <div className="header">
              <h3>Mortgage Calculator </h3>
              <a onClick={clear}>Clear All</a>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="form">
              <div className={`amount ${!mortgageTotal ? error : active}`}>
                <label>Mortgage Amount</label>
                <div className="input-container">
                  <span>£</span>
                  <input
                    value={mortgageTotal} onChange={(e) => setMortgageTotal(Number(e.target.value))} type="number" />
                </div>
                {(error && !mortgageTotal) ? <p>This fıeld is required</p> : ''}
              </div>
              <div className="inpt">
                <div className={`inpt-term ${!mortgageTerm ? error : active}`}>
                  <label>Mortgage Term</label>
                  <div className="inpt-container">
                    <input
                      value={mortgageTerm} onChange={(e) => setMortgageTerm(Number(e.target.value))}
                      type="number" />
                    <span>years</span>
                  </div>
                  {(error && !mortgageTerm) ? <p>This fıeld is required</p> : ''}
                </div>
                <div className={`inpt-rate ${!interest ? error : active}`}>
                  <label>Interest Rate</label>
                  <div className="inpt-container">
                    <input
                      value={interest} onChange={(e) => setInterest(Number(e.target.value))}
                      type="number" />
                    <span>%</span>
                  </div>
                  {(error && !interest) ? <p>This fıeld is required</p> : ''}
                </div>
              </div>
              <div className="type ">
                <label>Mortgage Type </label>
                <label className="rad" onClick={() => classBg()}>
                  <input id='radio' type="radio" name='radio' />Repayment
                  <span id="checkmark"></span>
                </label>
                <label className="rad " onClick={() => classBg()}>
                  <input id='radio' type="radio" name='radio' />Interest Only
                  <span id="checkmark"></span>
                </label>
                {(error)}
              </div>
              <button onClick={() => result()}  > {iconCalculator}Calculate Repayments</button>
            </form>
          </div>
          <div className="card">
            <div className="row">
              {/* {total === '' ? <DefaultCard /> : <ActiveCard />} */}
              <ActiveCard />
            </div>
          </div>
        </div >
      </SiteContext.Provider>
    </>
  )
}