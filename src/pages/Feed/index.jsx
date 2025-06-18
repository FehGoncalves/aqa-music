import { Navbar } from "../../components/Navbar"

export const FeedPage = () => {
    return (
        <div className="flex flex-col bg-[#2C2C2C] min-h-screen">
            <Navbar />

            <div className="flex flex-col items-center justify-center p-8 text-neutral-50">


                <ul className="w-full list-none">
                    {[0, 1, 2, 3, 4, 5, 6].map(() =>
                        <li className="border-b w-full p-4">
                            <div className="w-full flex items-center justify-between">
                                <section className="flex items-center justify-center gap-4">
                                    <button><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="#92ADFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg></button>

                                    <h3>O nome dela é LEO</h3>
                                </section>
                                    <h3>Cantor</h3>

                                <h3>Neutro</h3>

                                <h3>1:12</h3>
                            </div>
                        </li>
                    )}
                </ul>

            </div>

        </div>
    )
}