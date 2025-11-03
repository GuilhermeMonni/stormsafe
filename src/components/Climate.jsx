import { useState, useEffect } from "react";

function Climate(){
    let [lat, setLat] = useState(null) //latitude user
    let [lon, setLon] = useState(null) //longitude user
    let [climateData, setClimateData] = useState(null) //infos climate
    let [weatherData, setWeatherData] = useState({
        condition: '',
        temperature: '', 
        humidity: ''
    })//climate data    
    let [icon, setIcon] = useState(null) //icon cliamte
    let [iconPath, setIconPath] = useState(null)//path icon 

    useEffect(() => { //set lat e lon user
        if(navigator.geolocation){ //search location use
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                const lat = parseFloat(pos.coords.latitude).toFixed(6)
                const lon = parseFloat(pos.coords.longitude).toFixed(6)

                setLat(lat)
                setLon(lon)
            },
            (err) => {
                console.error('Erro ao obter localização', err.message)
            }
        )
        }
    }, [])

    useEffect(() => { //search infos
        async function searchClimate() {
        try{ //search infos
           const res = await fetch(`https://stormsafe-api.onrender.com/climate/${lat}/${lon}`) //url api

           const data = await res.json()
           setClimateData(data) //set data api
        } catch(err){
            console.error('Erro ao buscar cidade.', err)
        }
        }

        if(lat !== null && lon !== null){
            searchClimate()
        }
    }, [lat, lon])

    useEffect(() => { //list infos climate
        if(climateData){
            setWeatherData({
                condition: climateData.condition,
                text: climateData.text,
                temp: 'Temperatura: ' + parseInt(climateData.temp) + '°C',
                humidity: 'Umidade: ' + parseInt(climateData.humidity)
            })
            setIcon(climateData.text)
        }
    }, [climateData])

    useEffect(() => { //set icon climate
        switch(icon){
            case 'Ensolarado':
                setIconPath('sol.png')
                break
            case 'Parcialmente nublado': 
                setIconPath('nublado.png')
                break
            case 'Nublado': 
                setIconPath('nublado.png')
                break
            case 'Névoa': 
                setIconPath('nevoa.png')
                break
            case 'Neve com vento': 
                setIconPath('neve.png')
                break
            case 'Nevasca': 
                setIconPath('nevoa.png')
                break
            case 'Nevoeiro': 
                setIconPath('nevoa.png')
                break
            case 'Garoa leve': 
                setIconPath('garoa.png')
                break
            case 'Garoa': 
                setIconPath('garoa.png')
                break
            case 'Garoa forte': 
                setIconPath('garoa.png')
                break
            case 'Chuva leve': 
                setIconPath('chuva.png')
                break
            case 'Chuva moderada': 
                setIconPath('tempestade.png')
                break
            case 'Chuva forte': 
                setIconPath('tempestade.png')
                break
            case 'Granizo leve': 
                setIconPath('chuva-de-granizo.png')
                break
            case 'Neve leve':
                setIconPath('neve.png')
                break
            case 'Neve moderada':
                setIconPath('neve.png')
                break
            case 'Neve forte':
                setIconPath('neve.png')
                break
            case 'Pancada leve':
                setIconPath('nuvem.png')
                break
            case 'Pancada moderada':
                setIconPath('chuva.png')
                break
            case 'Ambíguo':
                setIconPath('ponto-de-interrogacao.png')
                break
            default:
                setIconPath('ponto-de-interrogacao.png')
                break
        }
    }, [icon])

    return(
    <>
        <div className="h-56 bg-indigo-300 rounded-lg">
            <h2 key="title-city" className="font-mono">{climateData ? climateData.city : 'Carregando...'}</h2>

            <div className="flex items-center gap-6">
                {iconPath && (
                    <img 
                        src={`/imgs/${iconPath}`}
                        alt={weatherData.text}
                        className="w-20 h-20"
                    />
                )}

                <ul className="space-y-2">
                    <li className="text-lg font-semibold">{weatherData.text}</li>
                    <li>{weatherData.temp}</li>
                    <li>{weatherData.humidity}</li>
                </ul>
            </div>
        </div>
    </>
    )
}

export default Climate



