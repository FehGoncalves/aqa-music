import { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import axios from "axios";

export const UploadPage = () => {
    const userData = JSON.parse(localStorage.getItem('user') ?? '{}')

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        duration: "",
        gender: "",
        audio: null,
        thumb: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e, tipo) => {
        const file = e.target.files[0];

        if (file) {
            setFormData((prev) => ({ ...prev, [tipo]: file }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();
        data.append("title", formData.title);
        data.append("description", formData.description);
        data.append("duration", formData.duration);
        data.append("genre", formData.gender);
        data.append("cover", formData.thumb);
        data.append("audio", formData.audio);

        try {
            const response = await axios.post('http://10.13.1.14:3333/api/songs', data, {
                headers: {
                    'Authorization': `Bearer ${userData.token}`
                }
            })

            console.log({ response })

        } catch (error) {
            console.error({ handleSubmitError: error })
        }
    };

    return (
        <div className="flex flex-col items-center justify-center bg-[#2C2C2C] p-8">
            <Navbar />

            <div className="w-full flex flex-col p-8 items-center justify-center">
                <section className="bg-slate-600 w-full p-6 rounded-lg flex flex-col items-center justify-center max-w-md">
                    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4">
                        <InputField
                            label="Título do projeto"
                            name="title"
                            id='title'
                            value={formData.titulo}
                            onChange={handleInputChange}
                        />

                        <fieldset className="w-full flex flex-col gap-2 text-neutral-50">
                            <label htmlFor="gender" className="text-lg font-medium">
                                Escolha seu gênero
                            </label>
                            <select
                                id="gender"
                                name="gender"
                                value={formData.genero}
                                onChange={handleInputChange}
                                className="bg-[#525B76] rounded-lg p-2 ring-neutral-50 w-full"
                            >
                                <option value="">Selecione um gênero</option>
                                {[
                                    { label: "Sertanejo", value: "sertanejo" },
                                    { label: "Rap", value: "rap" },
                                    { label: "Samba", value: "samba" },
                                    { label: "Funk", value: "funk" },
                                    { label: "Gospel", value: "gospel" },
                                    { label: "Podcast", value: "podcast" },
                                ].map((item, index) => (
                                    <option key={index} value={item.value}>
                                        {item.label}
                                    </option>
                                ))}
                            </select>
                        </fieldset>

                        <InputField
                            label="Descrição do projeto"
                            name="description"
                            id='description'
                            value={formData.descricao}
                            onChange={handleInputChange}
                        />

                        <InputField
                            label="Duração"
                            type="time"
                            name="duration"
                            id="duration"
                            value={formData.duracao}
                            onChange={handleInputChange}
                        />

                        {/* Dropzone de Imagem */}
                        <div className="flex flex-col gap-2 text-neutral-50">
                            <label htmlFor="thumb" className="text-lg font-medium">Capa (imagem)</label>
                            <input
                                type="file"
                                accept="image/*"
                                id='thumb'
                                onChange={(e) => handleFileChange(e, "thumb")}
                                className="bg-[#525B76] p-2 rounded-lg text-white"
                            />

                        </div>

                        {/* Dropzone de Áudio */}
                        <div className="flex flex-col gap-2 text-neutral-50">
                            <label htmlFor="audio" className="text-lg font-medium">Áudio</label>
                            <input
                                type="file"
                                accept="audio/*"
                                htmlFor="audio"
                                onChange={(e) => handleFileChange(e, "audio")}
                                className="bg-[#525B76] p-2 rounded-lg text-white"
                            />

                        </div>

                        <Button variant='secondary'>
                            Enviar Projeto
                        </Button>
                    </form>
                </section>
            </div>
        </div>
    );
};
