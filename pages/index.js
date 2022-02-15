import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Cadastro from '../components/consult'
import Incluir from '../components/incluir'
import Altera from '../components/alterar'
import Excluir from '../components/excluir'
import Profile from '../components/profile'
import Nav from '../components/nav'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cadastro Produtos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />      
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
     </Head> 
      <Nav />
      <Profile />
      <main className={styles.main}>   
        <Cadastro />
        <hr />
        <Incluir />
        <hr />
        <Altera />
        <hr />
        <Excluir />
        
      </main>
      <footer className={styles.footer}>
        <p>RAPHAEL DELGALLO CAETANO 2022 ©</p>
      </footer>
      <script src="main.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </div>
  )
}
