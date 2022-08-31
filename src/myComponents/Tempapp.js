import React, { useEffect, useState } from 'react'
import "./css/style.css"

export default function Tempapp() {

    const [city, setCity] = useState(null)
    const [search, setSearch] = useState("Mumbai")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=47f2b766611ec242b37d8df16c614b1d`
            const response = await fetch(url)
            // console.log(response)
            const resJson = await response.json()
            // console.log(resJson)
            setCity(resJson.main)
        }

        fetchApi()
    }, [search])
     let far
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        onChange={(event) => {
                            setSearch(event.target.value)
                        }}
                    />
                </div>

                {!city ? (
                    <p>Data Not Found</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                <i className="fa fa-street-view" aria-hidden="true"></i>
                                {search}
                            </h2>
                            <h1 className="temp">
                                {city.temp}°C <br/>
                                {far = ((9/5)*(city.temp)) + 32}
                                {Math.round(far)}°F
                            </h1>
                            <h3 className="tempmin_max">
                                Min: {city.temp_min} Celsius and Max: {city.temp_max} Celsius
                            </h3>
                        </div>
                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>
                )
                }



            </div>
        </>
    )
}
