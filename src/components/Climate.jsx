import { useState, useEffect } from "react";

function Climate(){
    let [lat, setLat] = useState(null) //latitude user
    let [lon, setLon] = useState(null) //longitude user
    let [climateData, setClimateData] = useState(null) //infos climate
    let [weatherData, setWeatherData] = useState({
        condition: '',
        temperature: 0, 
        humidity: 0
    })

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
           console.log(data)
           setClimateData(data) //set data api
        } catch(err){
            console.error('Erro ao buscar cidade.', err)
        }
        }

        if(lat !== null && lon !== null){
            searchClimate()
        }
    }, [lat, lon])

    useEffect(() => {
        if(climateData){
            setWeatherData({
                condition: climateData.condition,
                text: climateData.text,
                temp: 'Temperatura: ' + parseInt(climateData.temp) + '°C',
                humidity: 'Umidade: ' + climateData.humidity
            })
        }
    }, [climateData])

    return(
    <>
        <div className="w-1/5 h-56 bg-indigo-300 rounded-lg">
            <h2 key="title-city">{climateData ? climateData.city : 'Carregando...'}</h2>
            <ul>
                <li key="condition">{weatherData.text}</li>
                <li key="temperature">{weatherData.temp}</li>
                <li key="humidity">{weatherData.humidity}</li>
            </ul>
        </div>
    </>
    )
}

export default Climate



