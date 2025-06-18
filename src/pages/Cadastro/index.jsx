import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";

export const SignUpPage = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [fantasyName, setFantasyName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async event => {
        event.preventDefault()

        try {
            const payload = {
                name,
                nickname: fantasyName,
                email,
                phone,
                password
            }

            const response = await axios.post('http://10.13.1.14:3333/api/user', payload)

            if (response.status === 200) {
                localStorage.setItem('user', JSON.stringify(response.data))

                navigate('/feed')
            }
        } catch (error) {
            console.error({ error })
        }
    }

    return (
        <div className="flex flex-col items-center justify-center bg-[#2C2C2C] p-8">
            <section className="bg-slate-600 w-full p-6 rounded-lg flex flex-col items-center justify-center max-w-md">
                <figure className="flex items-center">
                    <img src='./Logo-2.png' alt="" width={200} height={200} />
                </figure>

                <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
                    <InputField
                        label='Nome completo'
                        name='name'
                        id='name'
                        onChange={event => setName(event.target.value)}
                        value={name}
                    />
                    <InputField label='Nome fantasia'
                        name='fantasyname'
                        id='Fantasyname'
                        onChange={event => setFantasyName(event.target.value)}
                        value={fantasyName}
                    />

                    <section className="grid lg:grid-cols-2 gap-4">
                        <InputField
                            label='E-mail'
                            name='email'
                            id='email'
                            type='email'
                            onChange={event => setEmail(event.target.value)}
                            value={email} />
                        <InputField
                            label='Telefone'
                            name='phone'
                            id='phone'
                            onChange={event => setPhone(event.target.value)}
                            value={phone} />
                    </section>

                    <InputField
                        name='password'
                        id='password'
                        key='password'
                        type='password'
                        label="Senha"
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                    />

                    <Button variant='secondary'>Finalizar cadastro</Button>
                </form>
            </section>
        </div>
    );
}

