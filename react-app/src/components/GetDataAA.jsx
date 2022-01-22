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
        <div>hello world, fetching data using the Promise class</div>
    );
}

export const GetDataAA = () => {
    logPerson()
    getActivities()
    return(
        <div>hello world, fetching data using Async/Await</div>
    );
}


const logPerson = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/people/2/')
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.warn(e)
    }
}

const getActivities = async () => {
    try {
        const response = await fetch('data.json')
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.warn(e)
    }
}
/*
export const GetDataAA = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/people/2/')
        const data = await response.json()
        console.log(data.name)
    } catch (e) {
        console.warn(e)
    }
    return(
        <div>hello world</div>
    );

}

const logPerson = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/people/2/')
        const data = await response.json()
        console.log(data.name)
    } catch (e) {
        console.warn(e)
    }
}

import {useState, useEffect} from "react";

export const GetData = () => {

    const [newData, setData] = useState([])
    const fetchData =() => {
        fetch("data.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                setData(data)
            })
            .catch(error => {
                console.log(error)
            })};

    useEffect(()=>{
        fetchData();

    },[]);

    return(
        <div>
            <h3>Here is a list from a .json file, using fetch in a component</h3>
            {newData.map((data,index)=>(
                <div key={index}>
                    <p>{data.activity}</p>
                </div>
            ))}
        </div>
    );
}*/