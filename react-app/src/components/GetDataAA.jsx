import {useEffect, useState} from "react";

export const GetDataPromiseClass = () => {
    fetch(
        'https://swapi.dev/api/people/1/'
    ).then(response => {
        return response.json()
    }).then(data => {
        console.log('fetching data using Promise class' + data.name)
    }).catch(e => {
        console.warn(e)
    })
    return(
        <div>Fetching Star Wars data using the Promise class</div>
    );
}

export const GetStarWarsDataAA = () => {
    useEffect(async () => {
        try {
            const response = await fetch('https://swapi.dev/api/people/2/')
            const data = await response.json()
            console.log(data)
        } catch (e) {
            console.warn(e)
        }
    },[]);
    return(
        <div>Fetching Star Wars data using Async/Await</div>
    );
}

export const GetActivitiesAA = () => {
    useEffect(async ()=> {
        try {
            const response = await fetch('data.json')
            const data = await response.json()
            console.log(data)
        } catch (e) {
            console.warn(e)
        }
    },[]);
    return(
        <div>Fetching Activities data using Async/Await</div>
    );
}

export const GetActivitiesPutToScreen = () => {
    const [newData, setData] = useState([])
    useEffect(async ()=> {
        try {
            const response = await fetch('data.json')
            setData(await response.json())
            console.log("the new data is here"+newData)
        } catch (e) {
            console.warn(e)
        }
    },[]);

    return(
        <div>
            <h3>Here is a list from a .json file, using fetch with async/await in a component</h3>
            {newData.map((data,index)=>(
                <div key={index}>
                    <p>{data.activity}</p>
                </div>
            ))}
            <div>Fetching Activities data using Async/Await and putting to screen</div>
        </div>
    );
}
