export default function Main() {
    return (
        <main className="bg-white">
            <section className="flex flex-col justify-center items-center py-32 px-32">
                <h2 className="font-sacra text-6xl">Dried meals for every occasion...</h2>
                <p className="font-nunito tracking-wider text-xl max-w-5xl text-center mt-12">Curated, dried, packaged and shipped with love and care so you can enjoy the journey instead of worrying about the next meal.</p>
            </section>
            <section className="grid grid-cols-3">
                <div className="description--easy aspect-square flex justify-center items-center">
                    <h3 className="font-sacra text-6xl text-white text-center">Easily Prepared</h3>
                </div>
                <div className="description--fresh aspect-square flex justify-center items-center">
                    <h3 className="font-sacra text-6xl text-white text-center">Fresh And Nutritious</h3>
                </div>
                <div className="description--light aspect-square flex justify-center items-center">
                    <h3 className="font-sacra text-6xl text-white text-center">Light Enough For Any Adventure</h3>
                </div>
            </section>
        </main>
    )
}