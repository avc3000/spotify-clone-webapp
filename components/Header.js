import { RiArrowLeftSLine, RiArrowRightSLine, RiMore2Fill } from "react-icons/ri";
import Link from 'next/link';

const Header = (props) => {
  const { setShowSidebar } = props;

  return (
    <header className="fixed left-0 top-0 md:ml-64 w-full md:w-[calc(100%-265px)] bg-spotify-lightgray flex items-center justify-between p-4 z-40 opacity-80">
      <div>
        <RiMore2Fill onClick={() => setShowSidebar(true)} className="text-2xl hover:pointer p-2 box-content md:hidden" />
        <div className="hidden md:flex items-center text-3xl gap-2">
          <RiArrowLeftSLine className="p-2 box-content hover:cursor-pointer hover:bg-gray-800 rounded-full bg-black" />
          <RiArrowRightSLine className="p-2 box-content hover:cursor-pointer hover:bg-gray-800 rounded-full bg-black" />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Link href="/" className="hover:text-white transition-colors">Registrarse</Link>
        <Link href="/" className="py-3 px-4 rounded-full bg-white text-spotify-black font-medium hover:scale-105 transition-transform">Iniciar Sessión</Link>
      </div>
    </header>
  )
}

export default Header;