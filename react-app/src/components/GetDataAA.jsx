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
    getStarWarsPerson()
    return(
        <div>Fetching Star Wars data using Async/Await</div>
    );
}

const getStarWarsPerson = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/people/2/')
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.warn(e)
    }
}

export const GetActivitiesAA = () => {
    getActivities()
    return(
        <div>Fetching Activities data using Async/Await</div>
    );
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