
import { Navbar } from "../../components/Navbar"
import { InputField } from "../../components/InputField";


export const UploadPage = () => {
    return (
        <div className="w-full flex flex-col">
            <Navbar />

            <div className="w-full flex flex-col p-8 items-center justify-center">
                <section className="bg-slate-600 w-full p-6 rounded-lg flex flex-col items-center justify-center max-w-md">
                    <form onSubmit className="flex flex-col w-full gap-4">
                        <InputField label='Título do projeto' />
                        <fieldset className="w-full flex flex-col gap-2 text-neutral-50">
                            <label className="text-lg font-medium">Escolha seu gênero</label>
                            <select className="bg-[#525B76] rounded-lg p-2 ring-neutral-50 w-full">
                                {[
                                    {
                                        label: 'Sertanejo',
                                        value: 'sertanejo'
                                    },

                                    {
                                        label: 'Rap',
                                        value: 'rap'
                                    },

                                    {
                                        label: 'Samba',
                                        value: 'samba'
                                    },

                                    {
                                        label: 'Funk',
                                        value: 'funk'
                                    },

                                    {
                                        label: 'Golpel',
                                        value: 'golpel'
                                    },

                                    {
                                        label: 'Podcast',
                                        value: 'podcast'
                                    }
                                ].map((item, index) =>
                                    <option key={index} value={item.value}>
                                        {item.label}
                                    </option>
                                )}
                            </select>
                        </fieldset>
                        <InputField label='Descrição do projeto' />
                        <InputField label='Duração' type='time' />
                    </form>
                </section>
            </div>
        </div>
    )
}