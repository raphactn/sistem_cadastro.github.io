import { useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Consult(){
    const [data, setData] = useState([]);
    const getData = async () =>{
        const response = await fetch('/api/users')
        const values = await response.json();
        setData(values)
    }
    return(
<div className='container'>
<p className={styles.title2}>CONSULTE ITENS</p>
<div className='row'>
  <div className='col-md-6'>
    <div className={styles.cadastro}>
      <label>Consultar Produtos</label>
      <select className='form-select' id="consultaProdutos" onClick={getData}>
        <option selected>Selecione</option>
        {data.map((item) => (
          <option>{item.name}</option>
        ))}
      </select>
    </div>
  </div>
  <div className='col-md-6'>
    <div className={styles.cadastro}>
      <label>Consultar Categorias</label>
      <select className='form-select' id="consultaCategoria" onClick={getData}>
      <option selected>Selecione</option>
      {data.map((item) => (
          <option>{item.name}</option>
        ))}
      </select>
    </div>
  </div>
</div>
</div>
    )
}
