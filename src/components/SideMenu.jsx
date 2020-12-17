import '../css/side-menu.css'
import '../css/style.css'
import '../css/reset.css'
import logo from '../img/logo-13-slaca.png'

export default function SideMenu (){
    return(
        <div className="side-menu" id="side-menu">
        <nav className="nav">
        <h1 className="title-side">SLACA 2019</h1>
          <img
            src={`${logo}`}
            alt="Logo 13 SLACA"
            className="img-side"
          />
          <ul className="list">
            <li className="menu-item text-nav"><a href='./'>Apresentação</a></li>
            <li className="menu-item text-nav"><a href='./'>Comitês</a></li>
            <li className="menu-item text-nav"><a href='./'>Autores</a></li>
            <li className="menu-item text-nav"><a href='./'>Eixos Temáticos</a></li>
            <li className="menu-item text-nav"><a href='./'>Trabalhos</a></li>
            <li className="menu-item text-nav"><a href='./'>Contato</a></li>
          </ul>
        </nav>
      </div>
    )
}