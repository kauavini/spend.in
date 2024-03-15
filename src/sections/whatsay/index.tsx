import Perfil from "../../assets/perfil.svg";
import "./styles.css";

export default function WhatSay(){

  return (
    <section className="comments-container">
        <div className="comments-title">
              <h2>WHAT THEY SAY</h2> 
              <h1>Our User Kind Words</h1>    
              <p>Here are some testimonials from our user after using Spend.In to manage their business  expenses.</p>   
        </div>
        <div>
            <div className="comments">
              {/* card */}
              <div className="card">

                  <h3>It’s just incredible!</h3>
                  <p>It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!</p>
                  <div>
                    <div className="comment-photo">
                    <img src={Perfil} alt="Imagem de perfil do comentario"/>
                    </div>
                    <div className="comment-user">
                    <h4>Jimmy Bartney</h4>
                    <span>Product Manager at Picko Lab</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <h3>It’s just incredible!</h3>
                  <p>It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!</p>
                  <div>
                    <div className="comment-photo">
                    <img src={Perfil} alt="Imagem de perfil do comentario"/>
                    </div>
                    <div className="comment-user">
                    <h4>Jimmy Bartney</h4>
                    <span>Product Manager at Picko Lab</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <h3>It’s just incredible!</h3>
                  <p>It’s just 1 month since I’m using Spend.In to manage my business expenses, but the result is very satisfying! My business finance now more neat than before, thanks to Spend.In!</p>
                  <div>
                    <div className="comment-photo">
                    <img src={Perfil} alt="Imagem de perfil do comentario"/>
                    </div>
                    <div className="comment-user">
                      <h4>Jimmy Bartney</h4>
                      <span>Product Manager at Picko Lab</span>
                    </div>
                  </div>
                </div>

              </div>
        </div>
    </section>
  )
}

