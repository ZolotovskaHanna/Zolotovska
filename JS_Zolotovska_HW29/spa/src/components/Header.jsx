import routers from '../helpers/routers'
import Link from './Link';

function Header() {
    return (
        <header className="flex justify-between rounded-lg ml-4 mr-4">  
            <div className="font-bold color text-orange-500">
                Zolotovska Hanna
            </div>
            <ul className="flex gap-2 flex-grow-1 text-orange-500">
                <li className="m-1">
                    <Link to={routers.main}>Home</Link>
                </li>
                <li className="m-1">
                    <Link to={routers.todo}>ToDo</Link>
                </li>
                <li className="m-1">
                    <Link to={routers.about}>About</Link>
                </li>
                <li className="m-1">
                    <Link to={routers.contact}>Contact</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header

