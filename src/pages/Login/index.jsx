import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";

export const SignInPage = () => {
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault()

        navigate('/feed')
    }

    return (
        <div className="flex flex-col lg:h-screen items-center justify-center bg-[#2C2C2C] p-8">

            <figure className="flex items-center">
                <img src='./Logo-2.png' alt="" width={200} height={200} />
            </figure>

            <section className="bg-slate-600 w-full p-6 rounded-lg flex flex-col items-center justify-center max-w-md">
                <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4 text-[#F1F1F1]">
                    <h1 className="text-center text-3xl text-neutral-50 font-bold">Faça o seu login</h1>

                    <InputField name='email' id='email' type='email' label="E-mail" />
                    <InputField name='password' id='password' type='password' label="Senha" />

                    <Button variant='secondary'>Entrar</Button>
                </form>
            </section>
        </div>
    );
}
