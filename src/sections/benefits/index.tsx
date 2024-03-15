import "./styles.css"

import PaymentCard from "../../assets/payment-card.svg"
import PaymentStorage from "../../assets/payment-storage.svg"
import PaymentBook from "../../assets/prayment-book.svg"
import TransactionHistory from "../../assets/transaction-history.svg"

export default function Benefits(){

  return (
    <section className="benefits-section">
        <div className="benefits-container">
          <div className="benefits-title">
            <h2 className="title-purple">WHY USE SPEND.IN</h2>
            <h1>Easy, Simple, Affordable</h1>
          </div>
          <p>
             Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.
          </p>
        </div>
        <div className="benefits-details">
          <div className="benefits-cards">
          <div className="benefits-card">
          <div className="card-image">
            <img src={PaymentCard} alt="" />
          </div>
          <div className="card-content">
              <h3>Automatic Invoice Payment</h3>
              <p>No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!</p>
             </div>
          </div>
          <div className="benefits-card">
            <div className="card-image">
              <img src={PaymentStorage} alt="" /> 
            </div>
            <div className="card-content">
              <h3>Clear payment history</h3>
              <p>Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!</p>
            </div>
          </div>
          <div className="benefits-card">
            <div className="card-image">
            <img src={PaymentBook} alt="" />
            </div>
            <div className="card-content">
              <h3>Use of multi-card payments</h3>
              <p>Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!</p>
            </div>
          </div>
          </div>  
          <div className="transaction-history">
            <img src={TransactionHistory} alt="" />
          </div>
        </div>
    </section>
  )
}
