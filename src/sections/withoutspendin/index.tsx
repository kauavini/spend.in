import "./styles.css"
import BalanceStatistics from "../../assets/balance-statistics.svg"
import SucessTitle from "../../assets/sucess-circle.svg"

export default function WithoutSpendin(){
  return (
    <section className="sucess-container"> 
      <div className="sucess-content">
        <div className="sucess-details">
            <div className="sucess-title">
              <h2>INCREASE PRODUCTIVITY</h2>
              <h1>Reduce Time in Doing Manual Work
                Managing Expenses</h1>
            </div>
              <div className="sucess-toggle">
                  <button className="without">With Spend.In</button>
                  <button className="with">Without Spend.In</button>
              </div>
              <div className="sucess-list">
                  <h3>Track Business Expenses until its Milisecond</h3>
                  <ul>
                      <li> <img src={SucessTitle} alt="" /> Analyze your business cost easily with group transaction thorugh tagging feature.</li>
                      <li> <img src={SucessTitle} alt="" />Add more than one card for payment. Integrated with more than 50+ payment method and support bulk payment.</li>
                      <li> <img src={SucessTitle} alt="" />Arrange your business expenses by date, name, etc.,  with just one click.</li>
                  </ul>
              </div>
        </div>
        <div className="sucess-statistics">
            <img src={BalanceStatistics} alt="" />
        </div>  
        </div>
    </section>
  )
}
