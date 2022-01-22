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
}