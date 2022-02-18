import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Cadastro from '../components/consult'
import Incluir from '../components/incluir'
import Altera from '../components/alterar'
import Excluir from '../components/excluir'
import Profile from '../components/profile'
import Nav from '../components/nav'
import axios from 'axios'


export async function getStaticProps() {
  const dataP = await fetch('http://auth.alternativasistemas.com.br:8001/api/product')
  const dataC = await fetch('http://auth.alternativasistemas.com.br:8001/api/category')
  const product = await dataP.json()
  const category = await dataC.json()
  return {
    props: { product, category },
    
  }
}

function addUser(){
  const nome = document.getElementById('nameIncluir').value;
  const valor =  document.getElementById('valorIncluir').value;
  const descricao = document.getElementById('descricaoIncluir').value;
  const url = "http://auth.alternativasistemas.com.br:8001/api/product";
  const newUser = {
    name: nome,
    value: valor,
    id: 50,
    description: descricao, 
    categoryId : 1 
  }

  axios.post(url, newUser)
  .then(response =>{
    alert("Usuario Cadastrado")
  })
  .catch(error => console.log(error))
}

export default function Home({ product, category }) {
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
        <div className='container'>
          <p className={styles.title2}>CONSULTE ITENS</p>
          <div className='row'>
            <div className='col-md-6'>
              <div className={styles.cadastro}>
                <label>Consultar Produtos</label>
                <select className='form-select' id="consultaProdutos">
                  {product?.map((post) => (
                    <option key={post.id}>{post.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className='col-md-6'>
              <div className={styles.cadastro}>
                <label>Consultar Categorias</label>
                <select className='form-select' id="consultaCategoria">
                {category?.map((post) => (
                    <option key={post.id}>{post.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
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
