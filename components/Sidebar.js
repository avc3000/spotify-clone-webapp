import Image from "next/image";
import Link from 'next/link';
import { RiAddBoxLine, RiCloseLine, RiFolder2Line, RiHeartFill, RiHome4Fill, RiSearchLine } from 'react-icons/ri'

const Sidebar = (props) => {
  const { showSidebar, setShowSidebar } = props;

  return (
    <div className={`bg-black fixed top-0 w-64 h-full p-6 flex flex-col justify-between ${showSidebar ? "left-0" : "-left-full"} md:left-0 transition-all duration-300 z-50`}>
      <div>
        <div className="md:hidden absolute right-4 top-4">
          <button className="text-2xl p-2 box-content" onClick={() => setShowSidebar(false)}><RiCloseLine /></button>
        </div>
        <div className="mb-8">
          <Image src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Spotify" height={130} width={130} />
        </div>
        <nav>
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link href="#" className="flex items-center gap-4 hover:text-gray-50 transition-colors"><RiHome4Fill className="text-2xl" />Inicio</Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-4 hover:text-gray-50 transition-colors"><RiSearchLine className="text-2xl" />Buscar</Link>
            </li>
            <li className="mb-8">
              <Link href="#" className="flex items-center gap-4 hover:text-gray-50 transition-colors"><RiFolder2Line className="text-2xl" />Tu biblioteca</Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-4 hover:text-gray-50 transition-colors"><RiAddBoxLine className="text-2xl" />Crear playlist</Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-4 hover:text-gray-50 transition-colors"><RiHeartFill className="text-2xl" />Tus me gusta</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul className="flex flex-col gap-y-2">
            <li>
              <Link href="#" className="text-sm hover:underline">Cookies</Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline">Privacidad</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar;