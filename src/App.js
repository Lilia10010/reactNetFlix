import React from 'react';
import Menu from './components/Menu'; //ñ precisa fazer referencia ao index.js pq puxa por padrão
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{background: "#141414"}}>

      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front-end?"
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[3]} />

      <Footer />

      
     
    </div>
  );
}

export default App;
