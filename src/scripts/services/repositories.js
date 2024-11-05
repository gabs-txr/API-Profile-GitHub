import { baseUrl, repositoriesQuantity } from '../variables.js'

async function getRepositories(userName){
    const responde = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await responde.json()
}

export{getRepositories}