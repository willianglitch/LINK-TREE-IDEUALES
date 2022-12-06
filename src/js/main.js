function perfilTitle(name,iconBar){
    return(`
        <img src="./src/assets/${iconBar}.svg" alt="imagem de uma barra horizontal ">
        <h1>${name}</h1>
`)
}

function addAnimation(iconBar,iconBall){
    return(`
    <div class="ball-animation">
        <img class="ball" src="./src/assets/${iconBall}.svg" alt="icone de uma bola de futebol ">
        <img class="small-bar" src="./src/assets/${iconBar}.svg" alt="imagem de uma barra horizontal ">
    </div>
    <div class="ball-animation">
        <img class="ball" src="./src/assets/${iconBall}.svg" alt="icone de uma bola de futebol">
        <img class="bar small-bar" src="./src/assets/${iconBar}.svg" alt="imagem de uma barra horizontal">
    </div>    
`)
}

function createLI(networks,name,link){
  return (`
        <li> <img src="./src/assets/${networks}.svg" alt="icone ${networks}"><a target="_blank" href="${link}">${name}</a></li>
`)  
}

document.querySelector('#App').innerHTML = `
<section class="container">
    <div class="perfil-container">
        <div class="Info-card">
            <div class="card-content">
                ${perfilTitle('Ideuales Hassan','Barra')}
            </div>
            <div class="card-animation">
                ${addAnimation('Barra','IconBall')}
            </div>
        </div>

        <div class="perfil-image">
            <img src="./src/assets/Perfil.svg" alt="imagem de um rapaz moreno enquanto ele anda pela rua ">
        </div>
    </div>

    <div class="social-card">
        <p>criador de conteúdo digital</p>
        <ul>
            ${createLI('Instragram','instragram','https://instagram.com/ideuales_hassan?igshid=MWI4MTIyMDE=')}
            ${createLI('Tiktok','tiktok','https://www.tiktok.com/@ideuales_hassan')}
            ${createLI('Facebook','facebook','https://www.facebook.com/ideuales.ramos?mibextid=LQQJ4d')}
            ${createLI('Twitter','twitter','https://twitter.com/Ideualess')}
        </ul>
    </div>
</section>

`