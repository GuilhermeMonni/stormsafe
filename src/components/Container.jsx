import Climate from './Climate'
import Alerts from './Alerts'

function Container() {
    return(
        <main className="bg-indigo-200 w-full h-screen">
            <Climate />
            <Alerts />
        </main>
    )
}

export default Container