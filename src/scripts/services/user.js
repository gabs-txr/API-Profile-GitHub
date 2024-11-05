import { baseUrl } from '../variables.js'

async function getUser(userName){
    const responde = await fetch(`${baseUrl}/${userName}`)
    return await responde.json()
}

export{getUser}