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

let zone1 = document.getElementById("zone1")
let zone2 = document.getElementById("zone2")
let pioche = document.getElementById("pioche")
            
let b1 = document.getElementById("b1")
let b2 = document.getElementById("b2")
let b3 = document.getElementById("b3")
let b4 = document.getElementById("b4")





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

function placeCard(card){
    switch(true) {
        case (!b1.classList.contains('plein')) :
    all.forEach(element => {
        if(element.image == card){
            let img = document.createElement("img")
            img.src= element['image']
            b1.appendChild(img)
            b1.classList.add('plein')
        }
    })
    break;
    case (b1.classList.contains('plein')  && !b2.classList.contains('plein')) :
        all.forEach(element => {
            if(element.image == card){
                let img = document.createElement("img")
                img.src= element['image']
                b2.appendChild(img)
                b2.classList.add('plein')
            }
        })
        break;
        case (b1.classList.contains('plein')  && b2.classList.contains('plein') && !b3.classList.contains('plein')) :
        all.forEach(element => {
            if(element.image == card){
                let img = document.createElement("img")
                img.src= element['image']
                b3.appendChild(img)
                b3.classList.add('plein')
            }
        })
        break;
        case (b1.classList.contains('plein')  && b2.classList.contains('plein') && b3.classList.contains('plein') && !b4.classList.contains('plein')) :
        all.forEach(element => {
            if(element.image == card){
                let img = document.createElement("img")
                img.src= element['image']
                b4.appendChild(img)
                b4.classList.add('plein')
            }
        })
        break;
}  
}

function cleanBoard(){
        document.querySelectorAll(".plein img")
        .forEach(img =>
            img.remove()
        )
        document.querySelectorAll("h2")
        .forEach(h2 =>
            h2.remove()
        )
        b1.classList.remove('plein')
        b2.classList.remove('plein')
        b3.classList.remove('plein')
        b4.classList.remove('plein')

        if(main0 != null) {
        if(main0.classList.contains('hidden')){
            main0.remove()
        } else {
            return false
        }
    }
        if (main1 != null){
        if(main1.classList.contains('hidden')){
            main1.remove()
        } else {
           return false
        }}
    
    

        if(main2 != null){
        if(main2.classList.contains('hidden')){
            main2.remove()
        } else {
           return false
        }}

        if(main3 != null){
        if(main3.classList.contains('hidden')){
            main3.remove()
        } else {
            return false
        }}
        
}

function pio(){
    
        let id = getRandomId(deck)
        let img = document.createElement("img")
        img.src= deck[id]["image"]
        switch(true){
            case(typeof main0 != 'undefined'):
                img.setAttribute("id", "main0")
                main0 = document.getElementById("main0")
                 zone2.appendChild(img).value = deck[id]["id"]
        removeElement(deck, deck[id])
                break; 
            case(typeof main0 != 'undefined' && typeof main1 == 'undefined'):    
            img.setAttribute("id", "main1")
             main1 = document.getElementById("main1")
             zone2.appendChild(img).value = deck[id]["id"]
        removeElement(deck, deck[id])
                break;
            case(typeof main0 != 'undefined' && typeof main1 != 'undefined' && typeof main2 == 'undefined'):    
            img.setAttribute("id", "main2")
             main2 = document.getElementById("main2")
             zone2.appendChild(img).value = deck[id]["id"]
        removeElement(deck, deck[id])
                break;
            case(typeof main0 != 'undefined' && typeof main1 != 'undefined' && typeof main2 != 'undefined' && typeof main3 == 'undefined'):    
                img.setAttribute("id", "main3")
                 main3 = document.getElementById("main3")
                 zone2.appendChild(img).value = deck[id]["id"]
        removeElement(deck, deck[id])
                break;        
        }
        // img.setAttribute("id", "main"+[i])
        // zone2.appendChild(img).value = deck[id]["id"]
        // removeElement(deck, deck[id])
    
}
// FONCTIONS



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

let main0 = document.getElementById('main0')


let adversaire = zone1.getElementsByTagName('img')
console.log(adversaire)

pioche.setAttribute("value", deck.length)
pioche.addEventListener("click", () => {
    let nbr = document.createElement("p")
    let text = document.createTextNode( deck.length)
    nbr.appendChild(text)
    jeu.appendChild(nbr)
})
 
let atq = null;
    let def = null;

    let zone3 = document.getElementById("zone3")
    let h2 = document.createElement("h2")


// Appel de la carte 0
if(main0 != 'undefined'){
main0.addEventListener("click", () => {
    // console.log(main0)
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

    if(dmg <= 0){
        h2.innerText = "Vous avez infligé 0 de dégats"
    } else {
    h2.innerText = "Vous avez infligé "+ dmg + " de dégats" 
    zone3.appendChild(h2)
    pvpnj.innerText = PVPNJ - dmg }

    placeCard(main0['src'])
        main0.classList.add('hidden')
    // console.log(main[0]['src'])
})
}


// Appel de la carte 1
if(main1 != 'undefined'){
main1.addEventListener("click", () => {

    

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

   
    if(dmg <0){
        h2.innerText = "Vous avez infligé 0 de dégats"
    } else {
    h2.innerText = "Vous avez infligé "+ dmg + " de dégats" 
    zone3.appendChild(h2)

        pvpnj.innerText = PVPNJ - dmg}
        placeCard(main1['src'])
        main1.classList.add('hidden')

})
}

// Appel de la carte 2
if(main2 != 'undefined'){
main2.addEventListener("click", () => {

    

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

    
    if(dmg <0){
        h2.innerText = "Vous avez infligé 0 de dégats"
    } else {
    h2.innerText = "Vous avez infligé "+ dmg + " de dégats" 
    zone3.appendChild(h2)

        pvpnj.innerText = PVPNJ - dmg}
        placeCard(main2['src'])
        main2.classList.add('hidden')
})
}

// Appel de la carte 3
if(main3 != 'undefined'){
main3.addEventListener("click", () => {

   

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


    if(dmg <0){
        h2.innerText = "Vous avez infligé 0 de dégats"
    } else {
    h2.innerText = "Vous avez infligé "+ dmg + " de dégats" 
    zone3.appendChild(h2)
    pvpnj.innerText = PVPNJ - dmg}
    placeCard(main3['src'])
    main3.classList.add('hidden')
})
}

let fin = this.getElementById("fin")

fin.addEventListener("click", () => {
    cleanBoard()
    pio()
})

                    
})


})


