export default function Main() {
    return (
        <main className="bg-white relative">
            <section className="flex flex-col justify-center items-center py-32 px-32">
                <h2 className="font-sacra text-6xl">Dried meals for every occasion...</h2>
                <p className="font-nunito tracking-wider text-xl max-w-5xl text-center mt-12">Curated, dried, packaged and shipped with love and care so you can enjoy the journey instead of worrying about the next meal.</p>
            </section>
            <section className="grid grid-cols-3">
                <div className="description--easy aspect-square flex justify-center items-center relative text-transparent hover:text-white transition">
                    <div className="bg-transparent opacity-50 absolute w-full h-full left-0 top-0 hover:bg-black transition" />
                    <h3 className="font-sacra text-6xl text-center relative pointer-events-none">Easily Prepared</h3>
                </div>
                <div className="description--fresh aspect-square flex justify-center items-center relative text-transparent hover:text-white transition">
                    <div className="bg-transparent opacity-50 absolute w-full h-full left-0 top-0 hover:bg-black transition" />
                    <h3 className="font-sacra text-6xl text-center relative pointer-events-none">Fresh And Nutritious</h3>
                </div>
                <div className="description--light aspect-square flex justify-center items-center relative text-transparent hover:text-white transition">
                    <div className="bg-transparent opacity-50 absolute w-full h-full left-0 top-0 hover:bg-black transition" />
                    <h3 className="font-sacra text-6xl text-center relative pointer-events-none">Light Enough For Any Adventure</h3>
                </div>
            </section>
            <section id="meals" className="main--categories grid grid-cols-4 -mt-px">
                <div className="categories--breakfast aspect-square flex flex-col justify-center text-center px-8 py-16 text-transparent relative hover:text-white transition">
                    <div className="bg-transparent opacity-50 absolute w-full h-full left-0 top-0 hover:bg-black transition" />
                    <h3 className="font-sacra text-5xl relative pointer-events-none">Breakfast</h3>
                    <p className="font-nunito mt-3 tracking-wider relative pointer-events-none">Cold oats, warm oats, flavoured oats, we love all oats for breakfast. Each of our breakfasts comes with organic coconut sugar and a delicious selection of dried fruit to add some flavour first thing in the morning. </p>
                </div>
                <div className="categories--dinner aspect-square flex flex-col justify-center text-center px-8 py-16 text-transparent relative hover:text-white transition">
                    <div className="bg-transparent opacity-50 absolute w-full h-full left-0 top-0 hover:bg-black transition" />
                    <h3 className="font-sacra text-5xl relative pointer-events-none">Dinner</h3>
                    <p className="font-nunito mt-3 tracking-wider relative pointer-events-none">The dinner collection has been carefully created and inspired by heartwarming meals from the African continent.</p>
                </div>
                <div className="categories--spreads aspect-square flex flex-col justify-center text-center px-8 py-16 text-transparent relative hover:text-white transition">
                    <div className="bg-transparent opacity-50 absolute w-full h-full left-0 top-0 hover:bg-black transition" />
                    <h3 className="font-sacra text-5xl relative pointer-events-none">Spreads</h3>
                    <p className="font-nunito mt-3 tracking-wider relative pointer-events-none">Who would have thought instant hummus was a thing? Made just the way you would at home, with fresh ingredients and organic olive oil. </p>
                </div>
                <div className="categories--snacks aspect-square flex flex-col justify-center text-center px-8 py-16 text-transparent relative hover:text-white transition">
                    <div className="bg-transparent opacity-50 absolute w-full h-full left-0 top-0 hover:bg-black transition" />
                    <h3 className="font-sacra text-5xl relative pointer-events-none">Snacks</h3>
                    <p className="font-nunito mt-3 tracking-wider relative pointer-events-none">You can never have enough snacks. Especially salty ones to replenish your electrolytes after a long day of hiking.</p>
                </div>
            </section>
            <section>
                <h2>Bestselling</h2>
            </section>
        </main >
    )
}