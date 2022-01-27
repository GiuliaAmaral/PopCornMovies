
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

            <img width="100%" src={cinema} style={{width: '300px'}} alt="..."/>

            <h3>Não há filmes por aqui</h3>



            </div>




            </>) : (<>


                <ul className="mt-5">
                    {filmes.map((filme) => {

                        return (
                            <>
                                <li className="mt-3" key={filme.id}>
                                    <p>{filme.nome}</p>
                                </li>

                                <button className="btn btn-danger" onClick={() => deletarItem(filme.id)}>Excluir</button>

                                <Link to={`/detalhes/${filme.id}`} className="btn btn-danger" style={{marginLeft:'10px'}}>Abrir</Link>



                            </>
                        )

                    })}
                </ul></>)


            }


        </>
    )

}