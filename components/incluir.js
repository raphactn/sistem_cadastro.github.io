import axios from 'axios'
import styles from '../styles/Home.module.css'

export default function Incluir(){

const url = "http://auth.alternativasistemas.com.br:8001/api/product"
const newProduct = {
    categoryId: 1,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    id: 0,
    name: "Produto Novo",
    value: 0
}


function addNewProduct(){
  
    axios.post(url, newProduct)
    .then(response => {})
    .catch(error => console.log(error))
}


    return(
        <div className='container'>
        <p className={styles.title2}>ADICIONE ITENS</p>
        <div className='row'>
        <div className='col-md-6'>
            <details className={styles.itens}>
                <summary>Incluir Produto</summary>
                <p>
                    <label>Informe o nome do produto</label>
                    <input className='form-control' id='nameIncluir' type={'text'}></input>
                    <label>Informe a descrição</label>
                    <textarea className='form-control' id='descricaoIncluir' placeholder='Informe a Descrição'></textarea>
                    <label>Informe o valor R$</label>
                    <input className='form-control' type={'number'}></input>
                    <label>Informe a Marca</label>
                    <input className='form-control' type={'text'}></input>
                    <label>Escolha a Categoria</label>
                    <select className='form-select' id="consultaCategoria">
                        <option value={''}>Select</option>
                    </select>
                    <button className='btnP'>Incluir</button>
                </p>
            </details>

        </div>
        <div className='col-md-6'>
            <details className={styles.itens}>
                <summary>Incluir Categoria</summary>
                <p>
                    <label>Informe o nome da categoria</label>
                    <input className='form-control' type={'text'}></input>
                    <label>Informe a descrição</label>
                    <textarea className='form-control' placeholder='Informe a Descrição'></textarea>
                    <button className='btnP'>Incluir</button>
                </p>
            </details>
            </div>
        </div>
        </div>
    )
}