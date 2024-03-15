import { Navbar } from "../../components/navbar";

import Dashboard from "../../assets/dashboard.svg";
import Eclipse from "../../assets/eclipse.svg";

import "./styles.css";

export default function Hero(){

  return (
    <section className="section1-container">
        <Navbar/>
        <div className="hero-container">
          <div className="eclipse-top">
              <img src={Eclipse} alt="" />
          </div>
          <div className="eclipse-bottom">
              <img src={Eclipse} alt="" />
          </div>
          <h1 className="hero-title">
            All your business
            expenses in one place.
          </h1>
          <p className="hero-legend">
          Your one-stop finance empower platform.
          Manage all your business expenses with our supafast app. 
          </p>
          <div className="hero-cta">
            <button className="button-cta-purple">
              Get a Free Demo
            </button>
            <button className="button-cta-gray">
              See Pricing
            </button>
          </div>
          <div className="hero-preview-dashboard">
              <img src={Dashboard} alt="" />
          </div>
        </div>
    </section>
  )
}
