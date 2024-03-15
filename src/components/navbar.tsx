import "./styles.css"

import { ChevronDown, Menu } from "lucide-react"

import SpendinLogo from "../assets/spendin-logo.svg"
import SpendinName from "../assets/spendin.svg"

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
            <button className="menu"> <Menu/></button>
          </div>
          <div className="menu-mobile">
            <button className="menu"> <Menu width={32} height={32} /></button>
          </div>
      </div>
  )
}