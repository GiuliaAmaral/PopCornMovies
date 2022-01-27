import { Link } from "react-router-dom";

import monster from "../img/monster.gif";

export default function Error() {

    return (

        <>

            <div class="mt-5 container text-center">

                <img width="100%" src={monster} style={{width: '200px'}} alt="..." />

                <h1>Desculpe, mas essa página não existe</h1>
                <Link to="/" className="btn btn-danger ">Voltar para a página inicial</Link>


            </div>



        </>
    )




}