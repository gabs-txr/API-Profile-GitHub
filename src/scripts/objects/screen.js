const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                <img src="${user.avatarUrl}" alt="Foto do perfil do usuário"/>
                                <div class="data">
                                    <h1>${user.name ?? 'Não possui nome cadastrado 😭'}</h1>
                                    <p class="follow">Followers: ${user.followers ?? 'Não possui followers 😓'} || Following: ${user.following ?? 'Não possui following 😓'}</p>
                                    <br>
                                    <p>${user.bio ?? 'Não possui Bio cadastrado 😥'}</p>
                                    
                                </div>
                            </div>`     
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name} <br> 🍴 ${repo.forks_count} ⭐ ${repo.stargazers_count} 👀 ${repo.watchers_count} 👩‍💻 ${repo.language ?? 'Linguagem não encontrada 😥'}</li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML +=  `<div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItens}</ul>
            </div>`
        }

        let eventsItens = ''
        user.events.forEach(even =>{
           
            if(even.type === 'CreateEvent'){
                let mensagem = 'Sem mensagem de commit'
                eventsItens += `<li><a href="${even.repo.url}" target="_blank">${even.repo.name} -- ${mensagem} </li>`

            }else if(even.type === 'PushEvent'){
                let commit = even.payload.commits[0].message
                eventsItens += `<li><a href="${even.repo.url}" target="_blank">${even.repo.name} -- ${commit} </li>`
            }
            
        })
        
        if(user.events.length > 0){
            this.userProfile.innerHTML +=  `<div class="events section">
                <h2>Eventos</h2>
                <ul>${eventsItens}</ul>
            </div>`
        }else{
            this.userProfile.innerHTML +=  `<div class="events section">
                <h2>Este usuário não possue eventos</h2>
            </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    }
}

export{screen}

