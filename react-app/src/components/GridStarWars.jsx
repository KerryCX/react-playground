import {useEffect, useState} from "react";
import './GridStarWars.css';

export const GetStarWarsData = () => {
    const [newData, setData] = useState([])
    useEffect(async ()=> {
        try {
            const response = await fetch('https://swapi.dev/api/people/2/')
            setData(await response.json())
            console.log("the new Star Wars data is here"+newData)
        } catch (e) {
            console.warn(e)
        }
    },[]);

    return(
        <div className="star-wars-container">
            <h1>Here is a list from Star Wars API, using fetch with async/await in a component</h1>
            <div className="grid-container">
                <div className="grid-box">
                    <div className="item1 grid-items"><p className="title">Character Name:<br/></p>{newData.name }</div>
                    <div className="item2 grid-items"><p className="title">Birth Year:<br/></p>{ newData.birth_year}</div>
                    <div className="item3 grid-items"><p className="title">Eye Colour:<br/></p>{ newData.eye_color}</div>
                    <div className="item4 grid-items"><p className="title">Skin Colour:<br/></p>{ newData.skin_color}</div>
                    <div className="item5 grid-items"><p className="title">Height:<br/></p>{ newData.height}</div>
                    <div className="item6 grid-items"><p className="title">Home World URL:<br/></p>{ newData.homeworld}</div>
                    <div className="item7 grid-items"><p className="title">Mass:<br/></p>{ newData.mass}</div>
                    <div className="item8 grid-items"><p className="title">Gender:<br/></p>{ newData.gender}</div>
                </div>
            </div>
            <div>Fetching star wars data using Async/Await and putting to screen</div>
        </div>
    );
}