 
const name = document.getElementById("name");
const birthyear = document.getElementById("birthyear");

const img = document.querySelector("img"); 


const button = document.querySelector(".getrandomcaractor");
button.addEventListener('click', (e) =>{
    e.preventDefault()
    name.innerHTML = '<em>Loading....</em>'
    eyecolor.innerHTML = '<em>Loading....</em>'
    birthyear.innerHTML = '<em>Loading....</em>'
    const random = Math.ceil(Math.random()*83) 
    fetch(`https://swapi.dev/api/people/${random}/`)
    .then(Response => Response.json())
    .then(david =>{
        name.innerHTML = david['name']
        eyecolor.innerHTML = david['eye_color']
        birthyear.innerHTML = david['birth_year']
    }) 
    fetch(`https://akabab.github.io/starwars-api/api/id/${random}.json`)
    .then(Response => Response.json() )
    .then(davidImage =>{
        img.src = davidImage["image"]
    })
})









    

