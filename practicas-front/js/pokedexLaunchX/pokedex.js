const pokeNameInput = document.getElementById("pokeName");
const pokePhoto = document.getElementById("pokeImg");
const displayDatosExtra= document.getElementById("displayExt");
const displaySize= document.getElementById("size");
const displayWeight= document.getElementById("weight");
const btnAbilities = document.getElementById("btn-abilities");
const btnMoves = document.getElementById("btn-moves");
const btnStats = document.getElementById("btn-stats");
const btnSpecies = document.getElementById("btn-species");
const btnTypes = document.getElementById("btn-types");
const btnMale = document.getElementById("btn-male");
const btnFemale = document.getElementById("btn-female");
const btnShinyMale = document.getElementById("btn-shiny-male");
const btnShinyFemale = document.getElementById("btn-shiny-female");
const btnLocation = document.getElementById("btn-location");
const btnSearch = document.getElementById("btn-search");

let data = null;

btnSearch.addEventListener("click",(event)=>{
    event.preventDefault();
    fetchPokemon();
})

const fetchPokemon = async ()=>{
    let pokeName = pokeNameInput.value;
    pokeName=pokeName.toLowerCase();
    const url=`https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    
    data = await fetch(url).then((res)=>{
        if (res.status!="200"){
            console.log(res)
            pokeImage("./Assets/pokemon-sad.gif")
            namePokemon("pokemon no encontrado")
        }
        else{
            return res.json()
        }
    })
    
    if (data){
        console.log(data);
        console.log(data?.moves);
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);
        let name = data.name;
        namePokemon(name)
        let datosPreview= `name: ${data.name} <br> Id: ${data.id}`;
        refreshDisplayExtra(datosPreview);
        let dataSize = data.height;
        refreshSize(dataSize);
        let dataWeight = data.weight;
        refreshWeight(dataWeight);
        addListeners(data);
    }
}

const pokeAbilities= async (pokemon)=>{
    let abilitiesData =pokemon?.abilities
    let text =`<u><strong>Abilities:</strong></u> <br>`
    for (ability in abilitiesData){
        let dir = abilitiesData[ability]?.ability?.url
        let consulta= await fetch(dir).then((res)=>{
            if (res.status!="200"){
                console.log(res)
            }
            else{
                return res.json()
            }
        })
        for (element in consulta?.names){
            if (consulta.names[element]?.language?.name =="es"){
                let abilityName = `<strong>${consulta.names[element]?.name}:</strong> <br>`;
                text+= abilityName
            }
        }
        console.log(consulta)
        for (element in consulta?.flavor_text_entries){
            if (consulta.flavor_text_entries[element]?.language?.name == "es"){
                let abilityDescription = `${consulta.flavor_text_entries[element].flavor_text} <br><br>`;
                text += abilityDescription;
                break;
            }
        }
    }
    refreshDisplayExtra(text);
};
const pokeMoves= async (pokemon)=>{
    let movesData =pokemon?.moves
    let text =`<u><strong>Abilities:</strong></u> <br>`
    for (ability in abilitiesData){
        let dir = abilitiesData[ability]?.ability?.url
        let consulta= await fetch(dir).then((res)=>{
            if (res.status!="200"){
                console.log(res)
            }
            else{
                return res.json()
            }
        })
        for (element in consulta?.names){
            if (consulta.names[element]?.language?.name =="es"){
                let abilityName = `<strong>${consulta.names[element]?.name}:</strong> <br>`;
                text+= abilityName
            }
        }
        console.log(consulta)
        for (element in consulta?.flavor_text_entries){
            if (consulta.flavor_text_entries[element]?.language?.name == "es"){
                let abilityDescription = `${consulta.flavor_text_entries[element].flavor_text} <br><br>`;
                text += abilityDescription;
                break;
            }
        }
    }
    refreshDisplayExtra(text);
};
const addListeners=(poke)=>{
    btnAbilities.addEventListener("click", ()=>{
        pokeAbilities(poke);
    });
    btnMoves.addEventListener("click", ()=>{
        pokeMoves(poke)
    })
}
    /* btnMoves
const btnStats = document.getElementById("btn-stats");
const btnSpecies = document.getElementById("btn-species");
const btnTypes = document.getElementById("btn-types");
const btnMale = document.getElementById("btn-male");
const btnFemale = document.getElementById("btn-female");
const btnShinyMale = document.getElementById("btn-shiny-male");
const btnShinyFemale = document.getElementById("btn-shiny-female");
const btnLocation = document.getElementById("btn-location"); */

//<button class="btn-op" id="abilities">🛠</button>
//                                <button class="btn-op" id="moves">⚔</button>
//                                <button class="btn-op" id="stats">🛡</button>
//                                <button class="btn-op" id="species">species</button>
//                                <button class="btn-op" id="types">types</button>
//                                <button class="btn-op">♂</button>w
//                                <button class="btn-op">♀</button>
//                                <button class="btn-op shiny">♂</button>
//                                <button class="btn-op shiny" id="">♀</button>
//                                <button class="btn-op" id="location">🗺</button>
//let data

const pokeImage= (url) => {
    pokePhoto.src= url
}

const namePokemon=(name)=>{
    pokeNameInput.value=name
}

const refreshDisplayExtra = (datos)=>{
    displayDatosExtra.innerHTML= datos;
}

const refreshSize=(dataSize)=>{
    let size = Math.round(dataSize*2.54)
    if (size <100){
        displaySize.innerText= size + " cm";
    }
    else{
        displaySize.innerText= size/100 + " mts";
    }

}
const refreshWeight=(dataWeight)=>{
    let weight = ((dataWeight*28.3495)/1000);
    displayWeight.innerText= weight.toFixed(2)+" kgs";
}