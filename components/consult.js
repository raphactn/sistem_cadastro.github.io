import styles from '../styles/Home.module.css'
export default function Cadastro() {
    return (
        <div className='container'>
            <p className={styles.title2}>CONSULTE ITENS</p>
            <div className='row'>
            <div className='col-md-6'>
                <div className={styles.cadastro}>
                    <label>Consultar Produtos</label>
                    <select className='form-select' id="consultaProdutos">
                        <option value={''}>Select</option>
                    </select>
                </div>
            </div>
            <div className='col-md-6'>
                <div className={styles.cadastro}>
                    <label>Consultar Categorias</label>
                    <select className='form-select' id="consultaCategoria">
                        <option value={''}>Select</option>
                    </select>
                </div>
            </div>
        </div>
        </div>
    )
}
