import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import { useState } from "react";
import axios from "axios";

export const SignInPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async event => {
        event.preventDefault()

        try {
            const payload = {
                email,
                password
            }

            const response = await axios.post('http://10.13.1.12:3333/api/auth', payload)

            if (response.status === 200) {
                localStorage.setItem('user', JSON.stringify(response.data))

                navigate('/feed')
            }
        } catch (error) {
            console.error({ error })
        }
    }
    return (
        <div className="flex flex-col lg:min-h-screen items-center justify-center bg-[#2C2C2C] p-8">

            <figure className="flex items-center">
                <img src='./Logo-2.png' alt="" width={200} height={200} />
            </figure>

            <section className="bg-slate-600 w-full p-6 rounded-lg flex flex-col items-center justify-center max-w-md">
                <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4 text-[#F1F1F1]">
                    <h1 className="text-center text-3xl text-neutral-50 font-bold">Faça o seu login</h1>

                    <InputField
                        name='email'
                        id='email'
                        type='email'
                        label="E-mail"
                        onChange={event => setEmail(event.target.value)}
                        value={email}

                    />
                    <InputField
                        name='password'
                        id='password'
                        key='password'
                        type='password'
                        label="Senha"
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                    />

                    <Button variant='secondary'>Entrar</Button>
                </form>
            </section>
        </div>
    );
}
