import {useEffect, useState} from "react";
import './GridStarWars.css';

export const GetStarWarsData = () => {
    const [newData, setData] = useState([])
    const FetchStarWarsData = async () => {
        try {
            const response = await fetch('https://swapi.dev/api/people/2/')
            setData(await response.json())
            console.log("the new Star Wars data is here"+newData)
        } catch (e) {
            console.warn(e)
        }
    }
    useEffect(()=> {
        const promise = FetchStarWarsData();
        console.log(promise)
    },[]);

    return(
        <div className="grid-container">
            <h3>Here is a list from Star Wars API, using fetch with async/await in a component</h3>
            <div>{ newData.name }</div>
            <div>{ newData.index}</div>
            <div>{ newData.eye_color}</div>
            <div>{ newData.skin_color}</div>
            <div>{ newData.height}</div>
            <div>{ newData.homeworld}</div>
            <div>

            </div>
            <div>Fetching star wars data using Async/Await and putting to screen</div>
        </div>
        /*<div>

            {newData.map((data,index)=>(
                <div key={index}>
                    <p>{data.activity}</p>
                </div>
            ))}
        </div>          */
    );
}