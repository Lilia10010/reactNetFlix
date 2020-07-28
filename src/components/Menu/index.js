import React from 'react';
import logo from '../../assets/img/logo.png';
import './Menu.css'; 
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

//Menu em maiuculo pq é um componente (da App.js)
function Menu(){
    
    return(
        <nav className="Menu"> 
            <a href="/">
                <img className="Logo" src={logo} alt="ReactFlix logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
              Novo vídeo 
            </Button>
            
        </nav>
    );
}

export default Menu;