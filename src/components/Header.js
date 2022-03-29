import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Logo from "../images/dmare.svg"

export default function Header() {
    const heroImages = ["hero426", "hero1280", "hero1600"]
    return (
        <header className="flex flex-col items-center relative">
            <img className="header--hero-img w-screen object-none object-top fixed top-0 left-0 -z-10" src={require(`../images/${heroImages[1]}.jpg`)} alt="" />
            <div className='header--noise pointer-events-none absolute top-0 left-0 -translate-1/2 w-screen h-screen -z-10' />
            <div className='fixed top-0 bg-gradient-to-b from-black to-transparent w-full h-28 opacity-40 -z-10'></div>
            <nav className="w-full max-w-6xl h-32 px-16 flex justify-between items-center">
                <FontAwesomeIcon className="text-white text-2xl cursor-pointer p-4" icon={solid('bars')} />
                <a className="text-2xl font-nunito text-white tracking-widest m-0 py-2 px-4 relative" href=".">
                    <img className='nav--logo' src={Logo} />
                    {/* <span className='font-indie text-3xl'>D</span>M<span className='absolute font-indie -top-4 left-14 text-xl rotate-12'>A</span><span className='absolute font-indie -top-1 left-14 text-xl rotate-90'>{">"}</span>RE */}
                </a>
                <FontAwesomeIcon className="text-white text-2xl cursor-pointer p-4" icon={solid('bag-shopping')} />
            </nav>
            <div className='fixed top-0 left-0 w-full header--hero-heading flex justify-center items-center pointer-events-none -z-10'>
                <h1 className='font-sacra text-5xl text-white'>{"Dried Meals, (Almost) Ready To Eat"}</h1>
            </div>
        </header>
    )
}