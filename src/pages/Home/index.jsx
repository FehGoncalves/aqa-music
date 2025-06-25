import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

export const HomePage = () => {
    return (
        <div className="flex flex-col lg:min-h-screen items-center justify-center bg-[#2C2C2C] px-8">
            <figure className="flex items-center">
                <img src='./Logo-2.png' alt="" width={200} height={200} />
            </figure>

            <div className="my-10 w-full flex justify-center">
                <Button variant='primary'>
                    <Link to='/login'>Entrar</Link>
                </Button>
            </div>

            <article className="flex flex-col w-full items-center gap-2">
                <p className="text-[#F1F1F1]">se não tem uma conta, cadastre-se já!</p>

                <Button variant='primary'>
                    <Link to='/cadastro'>Cadastre-se</Link>
                </Button>
            </article>



        </div>
    );
}

