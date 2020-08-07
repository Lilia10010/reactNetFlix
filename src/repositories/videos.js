import config, { URL_BACKEND_TOP } from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`


//receber o objetoDoVideo e converter para texto
function creat(objetoDoVideo){
    console.log(config.URL_BACKEND_TOP); 

        return fetch(`${URL_VIDEOS}?_embed=videos`,{
            //delite tbm vem aqui
            method: 'POST',
            headers:{
                //p2tipo de conteudo / para ele se preparar p ql tipo de conteúdo ele vai ler
                'Content-type': 'application/json',
            },
            body: JSON.stringify(objetoDoVideo),

        })
             .then(async (respostaDoServidor) => {

                if(respostaDoServidor.ok){
                    const resposta = await respostaDoServidor.json();
                    return resposta 
                }

                throw new Error('Não foi possível pegar os dados :(')                 
               
             })

}

export default {
    creat, 
}