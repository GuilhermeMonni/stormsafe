import Climate from './Climate'
import Alerts from './Alerts'

function Container() {
    return(
    <main className="grid grid-cols-[1fr_2fr_1fr] gap-6 bg-indigo-200 w-full min-h-screen p-6">
        <aside className="bg-indigo-300  rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Mapa/radar</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis quo temporibus inventore, tenetur alias magni voluptates ipsam in unde sunt, corporis ducimus minima, blanditiis quibusdam hic dolorum. Illo, praesentium quasi.</p>
        </aside>

        <section className="overflow-y-auto">
            <h2 className="text-xl font-bold mb-4 text-center">Feed de Noticias</h2>
            <Alerts />
        </section>

        <aside className="overflow-y-auto">
            <Climate />
        </aside>
    </main>
    )
}

export default Container