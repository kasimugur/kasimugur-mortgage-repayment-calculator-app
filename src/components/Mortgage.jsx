import { useState } from 'react'
import { iconCalculator, ilistrationEmpty } from '../page/page'
import '../scss/style.scss'
import { useEffect } from 'react'
import DefaultCard from './DefaultCard'
import ActiveCard from './ActiveCard'
import SiteContext from '../context/SiteContext'

export default function Mortgage() {



  const [mortgageTotal, setMortgageTotal] = useState('')
  const [mortgageTerm, setMortgageTerm] = useState('')
  const [interest, setInterest] = useState('')
  const [monthly, setMothly] = useState('')
  const [total, setTotal] = useState('')
  const [error, setError] = useState('')


  function interestRate(sayi, yüzde) {
    Number(sayi)
    Number(yüzde)
    const topl = (sayi * yüzde / 100)
    return topl + sayi
  }


  const result = () => {
    if ((mortgageTerm && mortgageTotal && interest) === '') {
      console.log("errorrrrr")
      setError('error')
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
              <div className={`amount ${!mortgageTotal ? error : ''}`}>
                <label>Mortgage Amount</label>
                <input
                  value={mortgageTotal} onChange={(e) => setMortgageTotal(Number(e.target.value))} type="number" />
                <span>£</span>
                {(error && !mortgageTotal) ? <p>This fıeld is required</p> : ''}
              </div>
              <div className="inpt">
                <div className={`inpt-term ${!mortgageTerm ? error : ''}`}>
                  <label>Mortgage Term</label>
                  <input
                    value={mortgageTerm} onChange={(e) => setMortgageTerm(Number(e.target.value))}
                    type="number" />
                  <span>years</span>
                  {(error && !mortgageTerm) ? <p>This fıeld is required</p> : ''}
                </div>
                <div className={`inpt-rate ${!interest ? error : ''}`}>
                  <label>Interest Rate</label>
                  <input
                    value={interest} onChange={(e) => setInterest(Number(e.target.value))}
                    type="number" />
                  <span>%</span>
                  {(error && !interest) ? <p>This fıeld is required</p> : ''}
                </div>
              </div>
              <div className="type">
                <label>Mortgage Type </label>
                <div className="rad">
                  <input type="radio" />
                  <label>Repayment</label>
                </div>
                <div className="rad ">
                  <input type="radio" />
                  <label>Interest Only</label>

                </div>
                {/* <p>This fıeld is required</p> */}
              </div>
              <button onClick={() => result()}  > {iconCalculator}Calculate Repayments</button>
            </form>
          </div>
          <div className="card">
            <div className="row">
              {total === '' ? <DefaultCard /> : <ActiveCard />}
            </div>
          </div>
        </div >
      </SiteContext.Provider>
    </>
  )
}