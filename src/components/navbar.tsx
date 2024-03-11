import "./styles.css"

import SpendinLogo from "../assets/spendin-logo.svg"
import SpendinName from "../assets/spendin.svg"

import { ChevronDown } from "lucide-react"

export function Navbar(){

  return (
      <div className="navbar-container">
          <div className="navbar-logo">
            <img src={SpendinLogo} alt="" />
            <img src={SpendinName} alt="" />
          </div>
          <nav className="navbar-navigation">
            <div>Produtos <ChevronDown/> </div>
            <div>Benefícios </div>
            <div>Como funciona</div>
            <div>Valores</div>
            <div>Empresa  <ChevronDown/></div>
          </nav>
          <div className="navbar-cta">
            <button>Entrar</button>
            <button>Get Demo</button>
          </div>
      </div>
  )
}