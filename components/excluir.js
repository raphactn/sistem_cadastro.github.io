import styles from '../styles/Home.module.css'
export default function Excluir() {
    return (
        <div className='container'>
            <p className={styles.title2}>DELETAR Produtos/Categorias</p>
            <div className='row'>
            <div className='col-md-6'>
                <div className={styles.cadastro}>
                    <label>Escolha o Produto</label>
                    <select className='form-select' id="consultaProdutos">
                        <option value={''}>Select</option>
                    </select>
                </div>
            </div>
            <div className='col-md-6'>
                <div className={styles.cadastro}>
                    <label>Escolha a Categoria</label>
                    <select className='form-select' id="consultaCategoria">
                        <option value={''}>Select</option>
                    </select>
                </div>
            </div>

            </div>
        </div>

    )
}
