import React, { useState, useEffect } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';


function CadastroCategoria(){
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#d7007e',
    }

    const { handleChange, valoresDoForm, clearForm  }= useForm(valoresIniciais)

    const [categorias, setCategorias] = useState([]) 
    


    //como e fosse um efeito colateral
    useEffect(() =>{
       // console.log('vrau') //o que é pra acontecer
//https://appreactnetflix.herokuapp.com/categoria
        const URL_TOP = window.location.hostname.includes('localhost')
        ? 'http://localhost:8080/categorias'
        : 'https://appreactnetflix.herokuapp.com/categorias' 
        fetch(URL_TOP)
            .then(async (respostaDoServidor) => {
                const resposta = await respostaDoServidor.json();
                setCategorias([
                    ...resposta,
                ]);
            })


        /* setTimeout(() => {
            setCategorias([
                ...categorias,
                valoresDoForm,
                {
                    "id": 1,
                    "nome": "Front End",
                    "descricao": "Una categorie mutchatcha",
                    "cor": "#cbd1ff"
                  },
            ])
        }, 4 * 1000) */
    }, []) // e quando é pra acontecer  //1: array vazio uma vez qndo começar (qndo carregar dados iniciais) 2: colocar uma ondição 3: sem o [] vai acontecer sempre que houver ações na página


    
    return(
        <PageDefault>
           <h1>Cadastro de Categoria: {valoresDoForm.nome}</h1>

           <form onSubmit={function handleSubmit(info){
               //para tirar o submit padrão e não fazer o reload
               info.preventDefault()
              
        //(...categorias) pegando o que já tem e depois (nomeDaCategoria) colocando no final o novo nome
               setCategorias([
                   ...categorias,
                   valoresDoForm
               ])
               clearForm(valoresIniciais)
           }}>
               {/**enviando os valores para camponentes->formField->index.js */}
               <FormField 
                    labelLP="Nome da categoria"
                    type="text"
                    name="nome"
                    value={valoresDoForm.nome}
                    onChange={handleChange}
               />

               <FormField 
                    labelLP="Descrição"
                    type="textarea" 
                    name="descricao"
                    value={valoresDoForm.descricao}
                    onChange={handleChange}
               />

               <FormField
                    labelLP="Cor"
                    type="color" 
                    name="cor"
                    value={valoresDoForm.cor}
                    onChange={handleChange}
               />                

               <Button> 
                   Cadastrar
               </Button>

                {categorias.length === 0 && (
                    <div>
                        Loading . . .
                    </div>
                )}


           </form>

           <ul>
               {/** p1 percorrer a categoria p2 indice de cada uma pra não dar erros*/}
               {categorias.map((categoria) => {
                   return (
                       <li key={`${categoria.id}`}> 
                           {categoria.titulo}
                       </li>
                   )
               })}
           </ul>



        <Link to="/">
            Ir para home
        </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;