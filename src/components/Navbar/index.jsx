import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <aside className="w-full bg-[#2C2C2C] flex p-2 text-neutral-50 items-center gap-6">
            <Link to='/feed' className="flex items-center justify-center">
                <img src='./Logo-2.png' alt="" width={100} height={100} className="object-contain" />
            </Link>

            <form className="w-full">
                <fieldset className="w-full">
                    <input type="text" placeholder="Encontre seu som viciante" className="w-full  border p-2 rounded-lg" />
                </fieldset>
            </form>

            <ul className="list-none flex gap-6 text-lg font-semibold">
                <li className="cursor-pointer hover:underline flex items-center justify-center text-nowrap"><Link to='/'>Feed</Link></li>
                <li className="cursor-pointer hover:underline flex items-center justify-center text-nowrap"><Link to='/'>Podcasts</Link></li>
                <li className="cursor-pointer hover:underline flex items-center justify-center text-nowrap"><Link to='/'>Upload</Link></li>
                <li className="cursor-pointer hover:underline flex items-center justify-center text-nowrap"><Link to='/'>Músicas Salva</Link></li>
            </ul>
        </aside>
    )
}