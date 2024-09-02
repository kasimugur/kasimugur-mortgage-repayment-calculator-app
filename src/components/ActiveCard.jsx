import { useContext } from "react"
import SiteContext from "../context/SiteContext"

export default function ActiveCard() {
  const {total, monthly} = useContext(SiteContext)

  return (
    <>
    <h1>Your results</h1>
    <p>Your results are shown below based on the information you provided. 
    To adjust the results, edit the form and click “calculate repayments” again.</p>
    <div className="card-active">
      <h5>Your monthly repayments</h5>
      <h1>£{monthly} </h1>

      <h5>  Total you'll repay over the term</h5>
      <h3>£ {total} </h3>
    </div>
    </>
  )
}