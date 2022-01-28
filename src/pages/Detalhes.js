import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react/cjs/react.development";
import API from "../services/api";

import { toast } from "react-toastify";

export default function Detalhes() {

    const { id } = useParams();
    const navigate = useNavigate();


    const [filme, setFilme] = useState([]);

    const [erroMsg, setErroMsg] = useState(false);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        (async () => {

            try {
                const response = await API.get(`r-api/?api=filmes/${id}`)

                if (response.data.length === 0) {
                    //tentou acessar um id que não existe
                    navigate('/');
                    return;
                }
                await setFilme(response.data)
                await setLoading(false)

            } catch (error) {

                console.error(error);
                await setLoading(false);
                await setErroMsg("Erro ao carregar os dados do filme!");

            }

        })()

    }, [id, navigate])


    async function salvaFilme() {

        const minhaLista = localStorage.getItem("minhaLista");
        let filmesSalvos = JSON.parse(minhaLista) || [];

        // se o filme já estiver na lista, não adiciona 

        const temFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

        if (temFilme) {

        toast.error("Filme já está na lista de favoritos!");

            return;
        }

        filmesSalvos.push(filme)
        localStorage.setItem("minhaLista", JSON.stringify(filmesSalvos));

        toast.success(`Filme ${filme.nome} adicionado com sucesso!`);
    }


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

                    {
                        (erroMsg !== false) ? (<>

                            <h1>{erroMsg}</h1>


                        </>) : (<>

                            <div className="mt-5 container d-flex align-items-center flex-column">
                                <h1>{filme.nome}</h1>
                                <img width="100%" src={filme.foto} alt={filme.nome}  />
                                <div className="container">
                                    <p>{filme.sinopse}</p>
                                </div>
                                

                                <button class="btn btn-danger d-flex justify-content-center">
                                    <a style={{textDecoration:"none", color: '#fff'}} target="blank" href={`https://www.youtube.com/results?search_query=${filme.nome} trailer`}>
                                        Trailer
                                    </a>
                                </button>

                                <button class="mt-2 btn btn-danger d-flex justify-content-center" onClick={salvaFilme}>Salvar</button>
                            </div>



                        </>)

                    }


                </>)
            }



        </>
    )

}