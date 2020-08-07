import React, {useEffect, useState } from 'react';
//import Menu from '../../components/Menu'; //ñ precisa fazer referencia ao index.js pq puxa por padrão
//import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
//import Footer from '../../components/Footer';
//import { URL_BACKEND_TOP } from '../../config';
import categoriasRepository from '../../repositories/categorias'
import PageDefault from '../../components/PageDefault';

function  Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);



  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        console.log(categoriasComVideos)
        setDadosIniciais(categoriasComVideos)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, []) //se não colocar o [] loop infinito


  //http://localhost:8080/categorias?_embed=videos
  return (

    <PageDefault paddingAll="0">
      {/** <div style={{background: "#141414"}}>
       *   <Menu /> retirado o menu pq esta incluso na pagedefault
       * */}
     

      {dadosIniciais.length === 0 && (<div>Loading . . .</div>)}
      
      {dadosIniciais.map((categoria, indice) => {
        if(indice === 0){
          return(
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="O que é Front-end?"
              />
            
                <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
            </div>
      )}
      // se todos
      return(
        <Carousel key={categoria.id} category={categoria} />
      )
      })}

          {/** 
          <BannerMain
            videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
            url={dadosIniciais.categorias[0].videos[0].url}
            videoDescription="O que é Front-end?"
           />
        
            <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

            <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />

            <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />

            <Carousel ignoreFirstVideo category={dadosIniciais.categorias[3]} />
          
          
            <Footer /> retirado pois foi incrementado o footer na pagedefault
          */
          }
    
     
   </PageDefault>

      
     
   
  );
}

export default Home;
