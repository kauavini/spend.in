import HowWorkSteps from "../../assets/how-works-steps.svg"
import Line from "../../assets/line.svg"
import DottedLine from "../../assets/dotted-line.svg"

import "./styles.css"

export default function HowWorks(){

  return (
    <section className="how-works-container">
      <div className="how-works-content">
        <div className="how-works-image">
            <img src={HowWorkSteps} alt="" />
        </div>
        <div className="how-works-details">
          <div className="how-works-title">
              <h2>HOW IT WORKS</h2>
              <h1>Few Easy Steps and Done</h1> 
              <p>
              In just few easy step, you are all set to manage your business finances. Manage all expenses with Spend.In all in one place.
              </p>
          </div>
          <div className="how-works-steps">
            {/* <img src={Line} alt="" className="line"/>
            <img src={DottedLine} alt="" className="dotted" /> */}
              <div> <span>1</span> Register your Spend.In account.</div>
              <div> <span>2</span>Fill in the list of your business expenses.</div>
              <div> <span>3</span> Done, let’s continue the work.</div>
          </div>
        </div>
        </div>
    </section>
  )
}
