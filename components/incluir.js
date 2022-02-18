import axios from 'axios'
import { useState } from 'react';
import styles from '../styles/Home.module.css'


export default function Incluir() {
    return (
        <div className='container'>
            <p className={styles.title2}>ADICIONE ITENS</p>
            <div className='row'>
                <div className='col-md-6'>
                    <details className={styles.itens}>
                        <summary>Incluir Produto</summary>
                        <p>
                            <form >
                            <label>Informe o nome do produto</label>
                            <input className='form-control' id='nameIncluir' type={'text'}></input>
                            <label>Informe a descrição</label>
                            <textarea className='form-control' id='descricaoIncluir' placeholder='Informe a Descrição'></textarea>
                            <label>Informe o valor R$</label>
                            <input className='form-control' id='valorIncluir' type={'number'}></input>
                            <label>Escolha a Categoria</label>
                            <select className='form-select' id="consultaCategoria">
                                <option value={''}>Select</option>
                            </select>
                            <button className='btnP' type='submit'>Incluir</button>
                            </form>
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
                            <button className='btnP' type='submit'>Incluir</button>
                        </p>
                    </details>
                </div>
            </div>
        </div>
    )
   
}
