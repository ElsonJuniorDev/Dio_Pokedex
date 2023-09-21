//Constante que vai acessar e inserir o html no body, que tem o id 'content'//
const content = document.getElementById('content')
//Constante que vai acessar e inserir o html no header com o mesmo id 'pokemon'//
const dataPoke = document.getElementById('pokemon')
//constante que acessa e insere o htm no elemento main que tem o id 'abolt'
const aboutPoke = document.getElementById('about')

//Pelo que parece essa funão vai ate o documento html e procura pela url da API 
// e busca pelo id do pokemon e retorna esse id
function getId(){
    const getUrl = window.location.href
    const paramUrl = new URL(getUrl)
    const id = paramUrl.searchParams.get("id")
    return id
}


function pagePokemon(id) {
    pokeApi.getPokemonDetailById(id).then((detail) => {
        content.classList.add(`${detail.type}`)
        dataPoke.innerHTML += `
        <header>
        <div class='icon'>
        </div>

        <section class="pokemon">
        <span class="number">#${detail.id}</span>
        <h1 class="name">${detail.name}</h1>
        <ol class="types">
        ${detail.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>
        </section>
        <div class="img-pokemon">
            <a href="index.html">
                <img src="${detail.photo}" alt="${detail.name}">
            </a>
        </div>
        </header>
        `

        aboutPoke.innerHTML += `
        <main id="about">
            <section class="detail">
                <h2 class="subtitle">Sobre</h2>
                    <dl class="about">
                        <dt class="text">Altura</dt>
                        <dd class="text">${detail.height/10}m</dd>
                        <dt class="text">Peso</dt>
                        <dd class="text">${detail.weight/10}kg</dd>
                    </dl>
                
                <h2 class="subtitle">Status</h2>
            <dl class="skills">
            <dt class="ability">HP - (${detail.hp})</dt>
            <dd class="bar">
                <progress class="progress-bar" max="200" value="${detail.hp}">${detail.hp}</progress>
            </dd>
    
            <dt class="ability">Ataque - (${detail.attack})</dt>
            <dd class="bar">
                <progress class="progress-bar" max="200" value="${detail.attack}">${detail.attack}</progress>
            </dd>
    
            <dt class="ability">Defesa - (${detail.defense})</dt>
            <dd class="bar">
                <progress class="progress-bar" max="200" value="${detail.defense}">${detail.defense}</progress>
            </dd>
            
            <dt class="ability">Sp.Atk - (${detail.spAtk})</dt>
            <dd class="bar">
                <progress class="progress-bar" max="200" value="${detail.spAtk}">${detail.spAtk}</progress>
            </dd>
            
            <dt class="ability">Sp.Def - (${detail.spDef})</dt>
            <dd class="bar">
                <progress class="progress-bar" max="200" value="${detail.spDef}">${detail.spDef}</progress>
            </dd>
            
            <dt class="ability">Velocidade (${detail.speed})</dt>
            <dd class="bar">
                <progress class="progress-bar" max="200" value="${detail.speed}">${detail.speed}</progress>
            </dd>
    
            <dt class="ability">Total (${detail.total})</dt>
            <dd class="bar">
                <progress class="progress-bar" max="700" value="${detail.total}">${detail.total}</progress>
            </dd>
                    </dl>
            </section>
            
        </main>
        `
    })
}

pagePokemon(getId())

