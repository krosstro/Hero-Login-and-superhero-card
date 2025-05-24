let namee = document.querySelector(".name")
let pass = document.querySelector(".pass")



let login = document.querySelector(".loginContainer")
let btn1 = document.querySelector(".btn1")
let input1 = document.querySelector(".input1")
let ironman = document.querySelector(".ironman")

let h1 = document.querySelector(".h1")
let image = document.querySelector(".iron")
let h3 = document.querySelector("h3")
let h2 = document.querySelector("h2")
let power = document.querySelector(".power")
let search = document.querySelector(".search")

let api = "./data.json"
async function getData(api) {
    let rData = await fetch(api);
    let data = await rData.json()
    return data
}


function verify() {

    let usernamee = "admin"
    let passwordd = "pass"

    if (namee.value == usernamee && pass.value == passwordd) {
        login.style.display = "none";
        input1.style.display = "block"
    }
    else { alert("wrong credentials") }
}

function hero() {
    ironman.style.display = "block"
    getData(api).then((data) => {
        const element = data.find(el => el.name.toLowerCase() === search.value.toLowerCase());
        if (element) {
            h1.textContent = element.name
            image.src = element.img
            h3.textContent = element.description
            h2.textContent = element.age
            power.textContent = element.Power
        } else {
            alert("No character found with that name.");
        }
    }).catch((err) => {
        console.log(err);
    })
}

