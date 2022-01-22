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
        <div className="star-wars-container">
            <h1>Here is a list from Star Wars API, using fetch with async/await in a component</h1>
            <div className="grid-container">
                <div className="grid-box">
                    <div className="item1 grid-items">{ newData.name }</div>
                    <div className="item2 grid-items">{ newData.birth_year}</div>
                    <div className="item3 grid-items">{ newData.eye_color}</div>
                    <div className="item4 grid-items">{ newData.skin_color}</div>
                    <div className="item5 grid-items">{ newData.height}</div>
                    <div className="item6 grid-items">{ newData.homeworld}</div>
                    <div className="item7 grid-items">{ newData.mass}</div>
                    <div className="item8 grid-items">{ newData.gender}</div>
                </div>
            </div>
            <div>Fetching star wars data using Async/Await and putting to screen</div>
        </div>
    );
}