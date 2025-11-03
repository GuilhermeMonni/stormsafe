import { useState, useEffect } from "react"

function Alerts(){
    let [dataAlerts, setDataAlerts] = useState({
        id: '',
        title: '',
        link: '',
        descripion: 0,
        img: ''
    })//return api 
    let [loading, setLoading] = useState(true) //loading page status

    useEffect(() => {
        async function searchNews(){
            try{
                const response = await fetch('https://stormsafe-api.onrender.com/alerts')

                const dataResponse = await response.json()
                console.log(dataResponse.dataResponse)
                setDataAlerts(dataResponse.dataResponse)
            }finally{
                setLoading(false)
            }
        }

        searchNews()     
    }, [])

    if(loading) return <p>Carregando...</p>

    return(
        <>
            {dataAlerts.map((alert) => (
                <article 
                    key={alert.id}
                    className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-blue-200/50 hover:scale-[1.01]"
                >
                    <div className="relative h-48 overflow-hidden">
                    <img 
                        src={alert.img} 
                        alt={alert.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                    </div>

                    <div className="p-6 space-y-4">
                    <h2 className="text-xl font-bold text-blue-900 line-clamp-2 leading-tight">
                        {alert.title}
                    </h2>

                    <p className="text-blue-700 text-sm leading-relaxed line-clamp-3">
                        {alert.description}
                    </p>

                    <a 
                        href={alert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm"
                    >
                        Ler mais
                    </a>
                    </div>
                </article>
            ))}
        </>
    )
}

export default Alerts