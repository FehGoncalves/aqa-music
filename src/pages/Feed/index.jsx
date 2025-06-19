import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar"
import axios from "axios";

export const FeedPage = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        const fetchMusicas = async () => {
            try {
                const response = await axios.get("http://10.13.1.14:3333/api/songs");
                setSongs(response.data);

            } catch (error) {
                console.error({ fetchMusicasError: error })
            }
        };

        fetchMusicas();
    }, []);


    return (
        <div className="flex flex-col bg-[#2C2C2C] min-h-screen">
            <Navbar />

            <div className="flex flex-col items-center justify-center p-8 text-neutral-50">
                <ul className="w-full list-none">
                    {songs.map((musica) => (
                        <li key={musica.id} className="border-b w-full p-4">
                            <div className="w-full flex items-center justify-between">
                                <section className="flex items-center justify-center gap-4">
                                    <button>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="50"
                                            height="50"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#92ADFF"
                                            strokeWidth="1"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                        </svg>
                                    </button>
                                    <h3>{musica.title}</h3>
                                </section>

                                <h3>{musica.user?.name || "Desconhecido"}</h3>
                                <h3>{musica.genre || "-"}</h3>
                                <h3>{musica.duration || "-"}</h3>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>

        </div>
    )
}