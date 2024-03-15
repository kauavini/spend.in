import BalanceStatistics from "../../assets/balance-statistics.svg"
import CloseIcon from "../../assets/close-circle.svg"
import "./styles.css"

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
                      <li> <img src={CloseIcon} alt="" />Complex recording process due to every administrative file in a different place.</li>
                      <li> <img src={CloseIcon} alt="" />Need more effort to pay manually one by one invoice because there is no payment accommodation.</li>
                      <li> <img src={CloseIcon} alt="" />Manual data arranging needs a long time because the different months/years are not in the same place.</li>
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
