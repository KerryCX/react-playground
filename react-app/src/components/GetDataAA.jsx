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