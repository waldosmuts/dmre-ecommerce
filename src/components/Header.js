import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
// import Logo from "../images/dmare.svg"n

export default function Header() {
    return (
        <header className="flex justify-center w-full relative">
            <div className='header--noise opacity-75 absolute top-0 left-0 w-full pointer-events-none' />
            <div className={`header--shadow absolute top-0 left-0 bg-gradient-to-b from-black to-transparent w-full h-28 opacity-40 pointer-events-none transistion-all block`} ></div>
            <nav className="max-w-6xl h-32 px-8 lg:px-16 w-full flex justify-between items-center z-10">
                <FontAwesomeIcon className="text-white text-2xl cursor-pointer p-4" icon={solid('bars')} />
                <a className="text-2xl font-nunito text-white tracking-widest m-0 py-2 px-4 relative" href=".">
                    <FontAwesomeIcon className="text-white text-4xl cursor-pointer p-4" icon={solid('jar-wheat')} />
                    {/* <img className='nav--logo' src={Logo} /> */}
                    {/* <span className='font-indie text-3xl'>D</span>M<span className='absolute font-indie -top-4 left-14 text-xl rotate-12'>A</span><span className='absolute font-indie -top-1 left-14 text-xl rotate-90'>{">"}</span>RE */}
                </a>
                <FontAwesomeIcon className="text-white text-2xl cursor-pointer p-4" icon={solid('bag-shopping')} />
            </nav>
            <div className='fixed top-80 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full header--hero-heading flex flex-col justify-center items-center z-0'>
                <h1 className='font-sacra text-6xl text-white text-center pointer-events-none'>{"Dried Meals, (Almost) Ready To Eat"}</h1>
                <a className='font-indie shadow-md tracking-wider text-3xl text-lime-600 mt-4 bg-white hover:bg-lime-600 hover:text-white hover:shadow-none transition duration-300 px-6 py-2 rounded-full text-center cursor-pointer' href='#meals'>Grab 'Em Fresh</a>
            </div>
        </header>
    )
}