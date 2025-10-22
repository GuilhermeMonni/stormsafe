import { useState, useEffect } from "react";

function Climate(){
    let [lat, setLat] = useState(null) //latitude user
    let [lon, setLon] = useState(null) //longitude user

    useEffect(() => { //set lat e lon user
        if(navigator.geolocation){ //search location use
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setLat(pos.coords.latitude)
                setLon(pos.coords.longitude)
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
           const res = await fetch(`https://stormsafe-api.onrender.com/climate/${lat}/${lon}`)

           const data = await res.json()
           console.log(data)
        } catch(err){
            console.error('Erro ao buscar cidade.', err)
        }
        }
        
        if(lat !== null && lon !== null){
            searchClimate()
        }
    }, [lat, lon])

    return(
    <>
        <div className="w-1/5 h-56 bg-indigo-300 rounded-lg">
            dados climaticos
        </div>
    </>
    )
}

export default Climate



