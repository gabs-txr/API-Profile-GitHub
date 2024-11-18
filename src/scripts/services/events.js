import { baseUrl, repositoriesQuantity } from '../variables.js'

async function getEvents(userName){
    const responde = await fetch(`${baseUrl}/${userName}/events?per_page=${repositoriesQuantity}`)
    return await responde.json()
}

export{getEvents}