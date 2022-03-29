import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Header() {
    const heroImages = ["hero426", "hero1280", "hero1600"]
    return (
        <div className="bg-stone-900 min-h-screen">
            <header className="flex flex-col items-center">
                <div className='fixed top-0 bg-gradient-to-b from-black to-transparent w-full h-28 opacity-40 z-10'></div>
                <nav className="w-full max-w-5xl z-10 py-8 px-16 flex justify-between items-center">
                    <button><FontAwesomeIcon className="text-white text-2xl" icon={solid('bars')} /></button>
                    <a className="text-2xl font-nunito text-white tracking-widest m-0 py-2 px-4 relative" href=".">
                        <span className='font-indie text-3xl'>D</span>M<span className='absolute font-indie -top-4 left-14 text-xl rotate-12 font-semibold'>A</span><span className='absolute font-indie -top-1 left-14 text-xl rotate-90 font-semibold'>{">"}</span>RE
                    </a>
                    <button><FontAwesomeIcon className="text-white text-2xl" icon={solid('bag-shopping')} /></button>
                </nav>
                <img className="header--hero-img w-screen object-none object-top fixed top-0 left-0 z-0" src={require(`../images/${heroImages[1]}.jpg`)} alt="" />
                <h1 className='z-10 font-indie text-5xl text-white fixed top-72'>{"Dried Meals, (Almost) Ready To Eat"}</h1>
            </header>
        </div>
    )
}