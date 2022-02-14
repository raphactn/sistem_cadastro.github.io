import styles from '../styles/Home.module.css'
export default function Altera() {
    return (
        <div className='container'>
            <div className='row'>
            <p className={styles.title2}>ALTERE SEUS ITENS</p>
            <div className='col-md-6'>
                <details className={styles.itens}>
                    <summary>Alterar Produto</summary>
                    <p>
                        <label>Selecione o Produtos</label>
                        <select className='form-select' id="consultaProdutos">
                            <option value={''}>Select</option>
                        </select>
                        <label>Informe o nome do produto</label>
                        <input type={'text'} className='form-control'></input>
                        <label>Informe a descrição</label>
                        <textarea className='form-control' placeholder='Informe a Descrição'></textarea>
                        <label>Informe o valor R$</label>
                        <input className='form-control' type={'number'}></input>
                        <label>Informe a Marca</label>
                        <input type={'text'} className='form-control'></input>
                        <label>Escolha a Categoria</label>
                        <select className='form-select' id="consultaCategoria">
                            <option value={''}>Select</option>
                        </select>
                        <button className='btnP'>Alterar</button>
                    </p>
                </details>

            </div>
            <div className='col-md-6'>
                <details className={styles.itens}>
                    <summary>Alterar Categoria</summary>
                    <p>
                        <label>Selecione a categoria</label>
                        <select className='form-select' id="consultaCategoria">
                            <option value={''}>Select</option>
                        </select>
                        <label>Informe o nome da categoria</label>
                        <input type={'text'} className='form-control'></input>
                        <label>Informe a descrição</label>
                        <textarea className='form-control' placeholder='Informe a Descrição'></textarea>
                        <button className='btnP'>Alterar</button>
                    </p>
                </details>

            </div>
            </div>
        </div>

    )
}