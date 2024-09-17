let all = [];
document.addEventListener('DOMContentLoaded', function () {
    let PVPNJ = 20
    let PVJC = 20
    let pvpnj = document.getElementById("pvpnj")
    let pvjc = document.getElementById("pvjc")
    pvpnj.innerText = PVPNJ
    pvjc. innerText = PVJC
    fetch("https://raw.githubusercontent.com/the-fab-cube/flesh-and-blood-cards/develop/json/english/card.json")
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < data.length; i++){
                all.push({ id: data[i].unique_id, name: data[i].name, pitch: data[i].pitch, cost: data[i].cost, power: data[i].power, defense :data[i].defense, health: data[i].health, intelligence: data[i].intelligence, types: data[i].types, text: data[i].functional_text, types: data[i].type_text, image: data[i].printings[0]["image_url"]} )
            }
            console.log(all)


// FONCTIONS
function getRandomId(arr){
    return randomIndex = Math.floor(Math.random() * arr.length);
}

function removeElement(array, elementToRemove) {
    array.forEach((item, index) => {
        if (item == elementToRemove) {
            array.splice(index, 1);
        }
    });
    return array;
}
// FONCTIONS


zone1 = document.getElementById("zone1")
zone2 = document.getElementById("zone2")
pioche = document.getElementById("pioche")

deck = []
for(let i = 0; i <= 39; i++){
    let id = getRandomId(all)
    deck.push({ id: all[id].id, image: all[id].image} )
}
console.log(deck)


for( let i = 0; i <= 3; i++) {
    let id = getRandomId(all)
    let img = document.createElement("img")
    img.src= all[id]["image"]
    img.setAttribute("id", "adversaire"+[i])
    zone1.appendChild(img).value = all[id]["id"];
}



for( let i = 0; i <= 3; i++) {
    let id = getRandomId(deck)
    let img = document.createElement("img")
    img.src= deck[id]["image"]
    img.setAttribute("id", "main"+[i])
    zone2.appendChild(img).value = deck[id]["id"]
    removeElement(deck, deck[id])
}
console.log(deck)

let main = zone2.getElementsByTagName('img')
console.log(main)

let adversaire = zone1.getElementsByTagName('img')
console.log(adversaire)

main0 = document.getElementById("main0")
main1 = document.getElementById("main1")
main2 = document.getElementById("main2")
main3 = document.getElementById("main3")

pioche.setAttribute("value", deck.length)
pioche.addEventListener("click", () => {
    let nbr = document.createElement("p")
    let text = document.createTextNode("pioche : " + deck.length)
    nbr.appendChild(text)
    jeu.appendChild(nbr)
})
 

// Appel de la carte 0
main0.addEventListener("click", () => {

    let atq = null;
    let def = null;

    function getRandomCard(){
        return randomIndex = Math.floor(Math.random() * adversaire.length);
    } 

    let defId = getRandomCard()

    all.forEach(el => {
        if(el['id'] == adversaire[defId].value){
            def = el['defense']
            console.log(def)
            return def
        }
    })
    
    all.forEach(element => {
        if(element['id'] == main0.value){
            atq = element['power']
            console.log(atq)
            return atq;
        }
    })

    let dmg = atq - def
    console.log(dmg)

    let zone3 = document.getElementById("zone3")
    let h2 = document.createElement("h2")
    if(dmg <= 0){
        h2.innerText = "Vous avez infligé 0 de dégats"
    } else {
    h2.innerText = "Vous avez infligé "+ dmg + " de dégats" 
    zone3.appendChild(h2)
    pvpnj.innerText = PVPNJ - dmg }
})

// Appel de la carte 1
main1.addEventListener("click", () => {

    let atq = null;
    let def = null;

    function getRandomCard(){
        return randomIndex = Math.floor(Math.random() * adversaire.length);
    } 

    let defId = getRandomCard()

    all.forEach(el => {
        if(el['id'] == adversaire[defId].value){
            def = el['defense']
            console.log(def)
            return def
        }
    })
    
    all.forEach(element => {
        if(element['id'] == main1.value){
            atq = element['power']
            console.log(atq)
            return atq;
        }
        
    })

    let dmg = atq - def
    console.log(dmg)

    let zone3 = document.getElementById("zone3")
    let h2 = document.createElement("h2")
    if(dmg <0){
        h2.innerText = "Vous avez infligé 0 de dégats"
    } else {
    h2.innerText = "Vous avez infligé "+ dmg + " de dégats" 
    zone3.appendChild(h2)

        pvpnj.innerText = PVPNJ - dmg}
})

// Appel de la carte 2
main2.addEventListener("click", () => {

    let atq = null;
    let def = null;

    function getRandomCard(){
        return randomIndex = Math.floor(Math.random() * adversaire.length);
    } 

    let defId = getRandomCard()

    all.forEach(el => {
        if(el['id'] == adversaire[defId].value){
            def = el['defense']
            console.log(def)
            return def
        }
    })
    
    all.forEach(element => {
        if(element['id'] == main2.value){
            atq = element['power']
            console.log(atq)
            return atq;
        }
        
    })

    let dmg = atq - def
    console.log(dmg)

    let zone3 = document.getElementById("zone3")
    let h2 = document.createElement("h2")
    if(dmg <0){
        h2.innerText = "Vous avez infligé 0 de dégats"
    } else {
    h2.innerText = "Vous avez infligé "+ dmg + " de dégats" 
    zone3.appendChild(h2)

        pvpnj.innerText = PVPNJ - dmg}
})

// Appel de la carte 3
main3.addEventListener("click", () => {

    let atq = null;
    let def = null;

    function getRandomCard(){
        return randomIndex = Math.floor(Math.random() * adversaire.length);
    } 

    let defId = getRandomCard()

    all.forEach(el => {
        if(el['id'] == adversaire[defId].value){
            def = el['defense']
            console.log(def)
            return def
        }
    })
    
    all.forEach(element => {
        if(element['id'] == main3.value){
            atq = element['power']
            console.log(atq)
            return atq;
        }
        
    })

    let dmg = atq - def
    console.log(dmg)

    let zone3 = document.getElementById("zone3")
    let h2 = document.createElement("h2")
    if(dmg <0){
        h2.innerText = "Vous avez infligé 0 de dégats"
    } else {
    h2.innerText = "Vous avez infligé "+ dmg + " de dégats" 
    zone3.appendChild(h2)
    pvpnj.innerText = PVPNJ - dmg}
})

                    
})


})


