import React from 'react'
import styles from '../styles/Home.module.css'

export default function Cadastro() {
//comunica produto api    
const [dadosProduto, setDadosProduto] = React.useState({});

React.useEffect(() =>{
fetch('http://auth.alternativasistemas.com.br:8001/api/product/')
.then((respostaDoServer) =>{
    return respostaDoServer.json();
})
.then((respostaConvertida)=>{
    console.log('respostaConvertida', respostaConvertida)
    setDadosProduto(respostaConvertida);
})

},[]);
const [dadosCategory, setDadosCategory] = React.useState({});

React.useEffect(() =>{
fetch('http://auth.alternativasistemas.com.br:8001/api/category/1')
.then((respostaDoServer) =>{
    return respostaDoServer.json();
})
.then((respostaConvertida)=>{
    console.log('respostaConvertida', respostaConvertida)
    setDadosCategory(respostaConvertida);
})

},[]);

    return (
        <div className='container'>
            <p className={styles.title2}>CONSULTE ITENS</p>

            <div className='row'>
            <div className='col-md-6'>
                <div className={styles.cadastro}>
                    <label>Consultar Produtos</label>
                    <select className='form-select' id="consultaProdutos">
                        <option value={''}>{dadosProduto.name}</option>
                    </select>
                </div>
            </div>
            <div className='col-md-6'>
                <div className={styles.cadastro}>
                    <label>Consultar Categorias</label>
                    <select className='form-select' id="consultaCategoria">
                        <option value={''}>{dadosCategory.name}</option>
                    </select>
                </div>
            </div>
        </div>
        </div>
    )
}
