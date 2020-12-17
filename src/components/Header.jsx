import '../css/header.css'
import '../css/style.css'
import '../css/reset.css'
import global from '../img/global.svg'
import arrow from '../img/sort-down.svg'
import person from '../img/person.webp'
import { useState } from 'react';


export default function () {
  const [langList, setLangList] = useState('hide');
  const [notifies, setNotifies] = useState(0);

  function showLangs() {
    if (langList === 'hide') {
      setLangList('lang-list')
    } else {
      setLangList('hide')
    }
  }


  return (
    <header className="header">
      <div id="titles">
        <p className="sub-title">
          Anais do Simpósio Latino Americano de Ciências de Alimentos
              </p>
        <h2 className="title">
          Anais do 13º Simpósio Latino Americano de Ciência de Alimentos
              </h2>
        <p className="sub-title">ISSN: 1234-5678</p>
      </div>
      <div id="lang" >
        <div className="lang-btn" onClick={showLangs}>
          <img src={global} alt="Globo" id="globo-lang" />
          <p className="" id="lang-title">PT-BR</p>
          <img src={arrow} alt="Globo" id="arrow-lang" />
        </div>
        <div className={langList}>
          <p className="lang-value">PT-BR</p>
          <p className="lang-value">EN-US</p>
        </div>
        {/*         <select className="" id="lang-select" value="" hidden>
          <option hidden value="pt-br">PT-BR</option>
          <option hidden value="en-us">EN-US</option>
        </select>
        //SE FOR USAR PHP O SELECT É A MELHOR OPÇÃO
        */}
      </div>
      <div className="user-profile">
        <p className="user-txt">Bem vindo!</p>
        <p className="user-txt">alguem12@galoascience.com</p>
        <div className="user-wrap">
          <p className="notify">{notifies}</p>
          <img src={person} alt="user profile photo" srcset="" className="user-profile-photo" />
        </div>
      </div>
    </header>
  )
}