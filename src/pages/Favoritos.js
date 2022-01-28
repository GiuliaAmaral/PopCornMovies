
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

import cinema from "../img/cinema.gif"

export default function Favoritos() {

    const [filmes, setFilmes] = useState([]);


    useEffect(() => {

        const minhaLista = localStorage.getItem("minhaLista");
        setFilmes(JSON.parse(minhaLista) || []);

    }, [])


    // o filter percorre um array e retorna um novo array,neste caso, ele retorna todos os filmes, menos o que é passado como parametro no id que é o filme.id

    function deletarItem(id) {
        let filmeSelecionado = filmes.filter((item) => {
            return (item.id !== id);
        })

        setFilmes(filmeSelecionado);
        localStorage.setItem("minhaLista", JSON.stringify(filmeSelecionado));
        toast.success("Filme removido da lista de favoritos!");

    }


    return (

        <>

            {(filmes.length === 0) ? (<>


                <div className="container d-flex flex-column align-items-center">

                    <img width="100%" src={cinema} style={{ width: '300px' }} alt="..." />

                    <h3>Não há filmes por aqui</h3>



                </div>




            </>) : (<>


                <div className="mt-5 container d-flex justify-content-center">

                    <div className="lista-filmes">

                        {filmes.map((filme) => {

                            return (
                                <>

                                    <div key={filme.id} className="mt-4 card" style={{ width: '18rem' }}>

                                        <Link to={`/detalhes/${filme.id}`} className="text-decoration-none text-dark">
                                            <img width="100%" src={filme.foto} className="card-img-top" alt="..." />

                                            <div className="card-body text-center">
                                                <h5 className="card-title">{filme.nome}</h5>
                                            </div>
                                        </Link>

                                        <div className="card-footer text-center">
                                            <button className="btn btn-danger" onClick={() => deletarItem(filme.id)}>Excluir</button>
                                        </div>

                                    </div>

                                </>
                            )

                        })}
                    </div>

                </div>



            </>)


            }


        </>
    )

}