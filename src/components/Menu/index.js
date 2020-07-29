import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import './Menu.css'; 
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

//Menu em maiuculo pq é um componente (da App.js)
function Menu(){
    
    return(
        <nav className="Menu"> 
            <Link to="/">
                <img className="Logo" src={logo} alt="ReactFlix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
              Novo vídeo 
            </Button>
            
        </nav>
    );
}

export default Menu;