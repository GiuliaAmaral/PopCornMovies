import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import API from "../services/api"

export default function Inicio() {

    const [filmes, setFilmes] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadFilmes() {
            const response = await API.get('r-api/?api=filmes/')

            setFilmes(response.data)
            setLoading(false)
        }

        loadFilmes();

    }, [])


    return (
        <>

            {
                (loading) ? (<>

                    <div className="mt-5 d-flex justify-content-center">
                        <div className="spinner-border text-danger" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>

                </>) : (<>

                    <div className="mt-5 container d-flex justify-content-center">
                        <div className="lista-filmes">
                            {filmes.map((filmes) => {
                                return (
                                    <>
                                        <div key={filmes.id} className="card" style={{ width: '18rem' }}>
                                            <img src={filmes.foto} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{filmes.nome}</h5>
                                                <Link to={`/detalhes/${filmes.id}`} className="btn btn-danger d-flex justify-content-center">Abrir</Link>
                                            </div>
                                        </div>
                                        <br />
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