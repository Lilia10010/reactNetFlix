import { useState} from 'react'
//tem que ser use pq se não ele não usa //custom r
function useForm(valoresIniciais){
    //p1nome do array p2 set usa pra mudar o nome 
    const [valoresDoForm, setValoresDoForm] = useState(valoresIniciais);
    

        //p1 nome do campo que esta recebendo p2 valor do campo
        function setValue(chave, valor){
            setValoresDoForm({
                ...valoresDoForm,
                [chave]: valor, //o nome e o valor que veio do input (entre [] pq os valores recebidos são dinâmicos)
            })
        }
    
        function handleChange(info){  
            const { getAttribute, valoresDoForm } = info.target                              
            setValue(
                info.target.getAttribute('name'), 
                info.target.value,
                )
        } 

        function clearForm(){
            setValoresDoForm(valoresIniciais)
        }

        //como tem muita coisa para exportar, fazer um objetinho
        return{
            valoresDoForm,
            handleChange,
            clearForm,            
        }

}

export default useForm;