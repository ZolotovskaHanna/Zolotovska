import routers from '../helpers/routers';
import Link from "./Link";

function Footer() {
    return (
        <footer class="rounded-lg m-4">
            <div class="w-full mx-auto p-4 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-500 sm:text-center text-orange-500">
                   <Link href="tel:380509054821">+380509054821</Link>
                </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 text-orange-500 sm:mt-0">
                <li className="px-1">
                    <Link to={routers.main}>Home</Link>    
                </li>
                <li className="px-1">
                    <Link to={routers.todo}>ToDo</Link>
                </li>
                <li className="px-1">
                    <Link to={routers.about}>About</Link>
                </li>
                <li className="px-1">
                    <Link to={routers.contact}>Contact</Link>
                </li>
            </ul>
            </div>
        </footer>
    )
}

export default Footer