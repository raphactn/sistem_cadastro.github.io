import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Categorias() {
    return (
        <>
            <div className="container">
                <div className='row'>
                    <div className='col-md-6'>
                        <div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-title">Incluir Novo Produto</h5>
                            <p class="card-text">Adicione um novo produto ou categoria</p>
                            <Link href={'/incluir'}>
                            <a href="#" class="btn btnCategoria">Incluir</a>
                            </Link>
                        </div>
                    </div>
                    </div>
                    <div className='col-md-6'><div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-title">Consultar Produto</h5>
                            <p class="card-text">Consulte todos produto e categorias</p>
                            <Link href={'/consult'}>
                            <a href="#" class="btn btnCategoria">Consultar</a>
                            </Link>

                        </div>
                    </div></div>
                </div>
                <br/>
                <div className='row'>
                    <div className='col-md-6'><div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-title">Alterar Produto</h5>
                            <p class="card-text">Altere produtos e categorias</p>
                            <Link href={'/alterar'}>
                            <a href="#" class="btn btnCategoria">Alterar</a>
                            </Link>
                        </div>
                    </div></div>
                    <div className='col-md-6'><div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-title">Excluir Produto</h5>
                            <p class="card-text">Exclua produtos ou categorias.</p>
                            <Link href={'/excluir'}>
                            <a href="#" class="btn btnCategoria">Excluir</a>
                            </Link>
                        </div>
                    </div></div>
                </div>
            </div>
        </>
    )
}