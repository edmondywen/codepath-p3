async function getAllLocations(){
    try {
        const resp = await fetch(`http://localhost:3000/location`)
        const data = await resp.json()
        return data
    }
    catch (error) {
        console.log(error.message)
    }

}

async function getLocationById(id){
    try {
        const resp = await fetch(`http://localhost:3000/location/${id}`)
        const data = await resp.json()
        return data
    }
    catch (error) {
        console.log(error.message)
    }
}


export default {
    getAllLocations,
    getLocationById
}