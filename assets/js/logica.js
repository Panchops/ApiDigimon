const URL_BASE = 'https://digimon-api.vercel.app/api';
const URL_DIGI = URL_BASE + '/digimon';
let contenido = document.getElementById("contenido");
let digimon = document.getElementById("digimon");
let freshlvl = document.getElementById("freshlvl");


function tabla(datos) { 
    contenido.innerHTML ="";
    for (let temp of datos) {
        contenido.innerHTML += `<tr>
            <th scope="row"><img width="60px" height=60px src="${temp.img}"></ th>
            <td>${temp.name}</td>
            <td>${temp.level}</td>
        </tr>
        `;
    }
}


function listadigi (listado) {
    digimon.innerHTML ="";
    for (let temp of listado) {
        digimon.innerHTML += `
            <th scope="row"><img width="200px" height=200px src="${temp.img}"></ th>
            <td>${temp.name}</td>
            <td>${temp.level}</td>
            </tr>
            `;
    
    }
    
}

function listalevel (fresh) {
    freshlvl.innerHTML ="";
    for (let temp of fresh) {
        freshlvl.innerHTML += `

        <div id="card" class="card">
        <img src="${temp.img}" class="card-img-top"
        <div class="card-body">
            <h3 class="card-title">${temp.name}</h3>
            <p class="card-text">${temp.level}</p>
        </div>
        </div>

        
            `;

            
    
    }
    
}
// Search por nombre // 
function digiNombre() {
    let nombreDigi = document.getElementById("nombreDigimon").value;
    nombreDigi = nombreDigi.toLowerCase();
    document.getElementById("listado").style.display = "none";
    document.getElementById("freshlvl").style.display = "none";
    document.getElementById("digimon").style.display = "block";
    
    
    

    fetch(URL_DIGI + "/name/" + nombreDigi)
        .then(resp => resp.json())
        .then(datos => {
            console.log(datos);
            listadigi(datos);
    
        });
}


// niveles digimones //
function nivelfresh() {
    document.getElementById("listado").style.display = "none";
    document.getElementById("digimon").style.display = "none";
    document.getElementById("freshlvl").style.display = "block";
    

    fetch(URL_DIGI + "/level/Fresh")
        .then(resp => resp.json())
        .then(datos => {
            console.log(datos);
            listalevel(datos);
        });
}

function nivelTraining() {
    document.getElementById("listado").style.display = "none";
    document.getElementById("digimon").style.display = "none";
    document.getElementById("freshlvl").style.display = "block";
    

    fetch(URL_DIGI + "/level/Training")
        .then(resp => resp.json())
        .then(datos => {
            console.log(datos);
            listalevel(datos);
        });
}

function nivelinTraining() {
    document.getElementById("listado").style.display = "none";
    document.getElementById("digimon").style.display = "none";
    document.getElementById("freshlvl").style.display = "block";
    

    fetch(URL_DIGI + "/level/In Training")
        .then(resp => resp.json())
        .then(datos => {
            console.log(datos);
            listalevel(datos);
        });
}

function nivelRookie() {
    document.getElementById("listado").style.display = "none";
    document.getElementById("digimon").style.display = "none";
    document.getElementById("freshlvl").style.display = "block";
    

    fetch(URL_DIGI + "/level/Rookie")
        .then(resp => resp.json())
        .then(datos => {
            console.log(datos);
            listalevel(datos);
        });
}

function nivelChampion() {
    document.getElementById("listado").style.display = "none";
    document.getElementById("digimon").style.display = "none";
    document.getElementById("freshlvl").style.display = "block";
    

    fetch(URL_DIGI + "/level/Champion")
        .then(resp => resp.json())
        .then(datos => {
            console.log(datos);
            listalevel(datos);
        });
}

function nivelArmor() {
    document.getElementById("listado").style.display = "none";
    document.getElementById("digimon").style.display = "none";
    document.getElementById("freshlvl").style.display = "block";
    

    fetch(URL_DIGI + "/level/Armor")
        .then(resp => resp.json())
        .then(datos => {
            console.log(datos);
            listalevel(datos);
        });
}

function nivelUltimate() {
    document.getElementById("listado").style.display = "none";
    document.getElementById("digimon").style.display = "none";
    document.getElementById("freshlvl").style.display = "block";
    

    fetch(URL_DIGI + "/level/Ultimate")
        .then(resp => resp.json())
        .then(datos => {
            console.log(datos);
            listalevel(datos);
        });
}

function nivelMega() {
    document.getElementById("listado").style.display = "none";
    document.getElementById("digimon").style.display = "none";
    document.getElementById("freshlvl").style.display = "block";
    

    fetch(URL_DIGI + "/level/Mega")
        .then(resp => resp.json())
        .then(datos => {
            console.log(datos);
            listalevel(datos);
        });
}

//fetch global//


fetch (URL_DIGI)
    .then(Response => Response.json())
    .then(datos => { tabla(datos);
        console.log(datos)
    
    });