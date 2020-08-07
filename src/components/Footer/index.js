import React from 'react';
import { FooterBase } from './styles';

import lilia from '../../assets/img/lilia_paula_neiva.png'

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src={lilia} alt="Logo Lp" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="#">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
