import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

  const Pagina404 = () => (<div>Página 404</div>)

//switch faz a lógica pra saber a página atual e o route renderiza o conteúdo (da url referida)
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact/> 
      <Route path="/cadastro/video" component={CadastroVideo} />  
      <Route path="/cadastro/categoria" component={CadastroCategoria} />  
      <Route  component={ ()=> (<div>Página 404</div>)} />  
          
    </Switch> 


  </Router>,
  
  
  document.getElementById('root')
);

