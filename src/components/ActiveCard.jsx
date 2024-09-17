import { useContext } from "react"
import SiteContext from "../context/SiteContext"

export default function ActiveCard() {
  const { total, monthly } = useContext(SiteContext)

  return (
    <>
      <h1>Your results</h1>
      <p>Your results are shown below based on the information you provided.
        To adjust the results, edit the form and click “calculate repayments” again.</p>
      <div className="card-active">
        <div className="card-active-2">
          <div id="card">
          <h5>Your monthly repayments</h5>
          {/* <h1>£{monthly} </h1> */}
          <h1>£1,797.74</h1>
          </div>
          <hr />
          <div id="card">
          <h5>  Total you'll repay over the term</h5>
          {/* <h3>£ {total} </h3> */}
          <h3>£539,322.94</h3>
          </div>
        </div>
      </div>
    </>
  )
}