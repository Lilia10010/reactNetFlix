import React, { useEffect, useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link, useHistory } from 'react-router-dom';
import useForm from '../../../hooks/useForm'
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo(){
    const history = useHistory();
    const [ categorias, setCategorias ] = useState([]);
    const { handleChange, valoresDoForm } = useForm({
        titulo: 'dd',
        url: 'ee',
        categoria: 'Front End',
    })


    useEffect(() => {
        categoriasRepository
        .getAll()
        .then((categoriasFormServer) => {
            setCategorias(categoriasFormServer);
        })
    }, [])

    //console.log(categorias)


    return(
        <PageDefault>
           <h1>Cadastro de vídeo</h1>


           <form onSubmit={(e)=> {
                    e.preventDefault(); // pra não fazer o reloud da página
                    //alert('Vídeo cadastrado com sucesso!!!'); 

                    //daria pra fazer com foreach tbm mas o find é mais declarativi
                    const categoriaEscolhida = categorias.find((categoria) => {
                        return categoria.titulo === valoresDoForm.categoria
                        
                    })

                    //console.log('categoriaEscolhida',categoriaEscolhida)
                    
                    videosRepository.creat({
                        titulo: valoresDoForm.url,
                        url: valoresDoForm.url,
                        categoriaId: 1,
                    }) 
                    .then(() => {
                        //console.log("cadastrou vrauu")
                        history.push('/');
                    })   
                    
                }}>
                    

                <FormField
                    id="titulo"
                    labelLP="titulo"
                    type="text"
                    name="nome"
                    value={valoresDoForm.titulo}
                    onChange={handleChange}
                />
                

                <FormField
                    id="titulo"
                    labelLP="URL do vídeo"
                    value={valoresDoForm.url}
                    onChange={handleChange}
                />

                <FormField
                    id="titulo"
                    labelLP="Categoria do vídeo"
                    type="text"
                    name="nome"
                    value={valoresDoForm.categoria}
                    onChange={handleChange}
                />
                

                <Button type="submit">
                    Cadastrar
                </Button>
           </form>




        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>
        </PageDefault>
    )
}

export default CadastroVideo;