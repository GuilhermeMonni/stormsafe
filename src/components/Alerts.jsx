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
                <article key={alert.id}>
                    <h2>{alert.title}</h2>
                    <p>{alert.description}</p>
                    <img src={alert.img} alt={alert.title}></img>
                    <a href={alert.link}>Ler mais</a>
                </article>
            ))}
        </>
    )
}

export default Alerts