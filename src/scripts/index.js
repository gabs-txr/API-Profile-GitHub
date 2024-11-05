import {getUser} from './services/user.js'
import {getRepositories} from './services/repositories.js'

import {user} from './objects/user.js'
import {screen} from './objects/screen.js'

document.getElementById('btn-search').addEventListener('click', () =>{
    const userName = document.getElementById('input-search').value
    if(validateEmptyInput(userName)) return
    getUserData(userName)
})

//PESQUISAR QUANDO A TECLA ENTER FOR APERTADA

document.getElementById('input-search').addEventListener('keyup', (e) =>{
    const userName = e.target.value
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if(isEnterKeyPressed){
        getUserData(userName)
        if(validateEmptyInput(userName)) return
    }
})

function validateEmptyInput(userName){
    if(userName.length === 0){
        alert('Preencha o campo com o nome de um usuário do GitHub')
        return true
    }
}

async function getUserData(userName) {
    const userResponse = await getUser(userName)
    
    if(userResponse.message === 'Not Found'){
        screen.renderNotFound()
        return
    }
    const repositoresResponse = await getRepositories(userName)

    user.setInfo(userResponse)
    user.setRepositories(repositoresResponse)

    screen.renderUser(user)
}
