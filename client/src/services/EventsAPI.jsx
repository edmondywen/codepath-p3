async function getAllEvents(){
    const resp = await fetch(`http://localhost:3000/event`)
    const data = await resp.json()
    return data
}

async function getEventById(id){
    const resp = await fetch(`http://localhost:3000/event/${id}`)
    const data = await resp.json() 
    return data
}

async function getEventsByLocation(location){
    const resp = await fetch(`http://localhost:3000/event/location/${location}`)
    const data = await resp.json() 
    return data
}

export default {
    getAllEvents, 
    getEventById,
    getEventsByLocation
}