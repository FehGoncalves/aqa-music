import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";

export const SignUpPage = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-[#2C2C2C] p-8">
            <section className="bg-slate-600 w-full p-6 rounded-lg flex flex-col items-center justify-center max-w-md">
                <figure className="flex items-center">
                    <img src='./Logo-2.png' alt="" width={200} height={200} />
                </figure>

                <form className="flex flex-col w-full gap-4">
                    <InputField label='Nome completo' />
                    <InputField label='Nome fantasia' />

                    <section className="grid lg:grid-cols-2 gap-4">
                        <InputField label='E-mail' />
                        <InputField label='Telefone' />
                    </section>

                    <InputField label='Senha' />

                    <Button variant='secondary'>Finalizar cadastro</Button>
                </form>
            </section>
        </div>
    );
}

