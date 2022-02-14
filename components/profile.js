import Link from 'next/link'
import styles from '../styles/Home.module.css'
export default function Profile(){
    return(
    <header className={styles.topo}>
        <div className='container'>
        <div className='row gx-5 align-items-center justify-content-center'>
            <div className='col-lg-8 col-xl-7 col-xxl-6'> 
            <h1>SISTEMA DE<br/> CADASTRO DE ITENS</h1><br/>
            <Link href={'https://raphaelcaetano.com/'}>
         <a target={'_blank'} className={styles.linkName}>Raphael Delgallo Caetano</a>
        </Link>
       </div>
            <div className='col-xl-5 col-xxl-6 d-none d-xl-block text-center'>
            <img src="/images/perfil.jpg" width={500}></img>
            </div>
        </div>
        </div>
       
    </header>
  
    )
}