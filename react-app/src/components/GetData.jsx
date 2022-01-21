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
            console.log(newData)
        })
        .catch(error => {
            console.log(error)
        })};

useEffect(()=>{
    fetchData();
    console.log(newData[0]);
},[]);

    return(
        <div>
            <h1>1</h1>
        </div>
    );
}