import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <aside className="w-full flex p-2 text-neutral-50 items-center justify-between">
            <section className="flex items-center">
                <Link to='/feed' className="mr-6">
                    <img src='./Logo-2.png' alt="" width={75} height={75} />
                </Link>

                <ul className="list-none flex gap-6 text-lg font-semibold">
                    <li className="cursor-pointer hover:underline"><Link to='/'>Feed</Link></li>
                    <li className="cursor-pointer hover:underline"><Link to='/'>Podcasts</Link></li>
                    <li className="cursor-pointer hover:underline"><Link to='/'>Upload</Link></li>
                    <li className="cursor-pointer hover:underline"><Link to='/'>Músicas Salva</Link></li>
                </ul>
            </section>
        </aside>
    )
}