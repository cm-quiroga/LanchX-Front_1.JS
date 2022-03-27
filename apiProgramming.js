
const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./img/sad-pikachu.gif");
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other.dream_world.front_default;
            let nPokemon = data.species.name;
            let tPokemon = data.types[0].type.name;
            let healthPokemon = data.stats[0].base_stat;
            let aPokemon = data.stats[1].base_stat;
            let dPokemon = data.stats[2].base_stat;
            let spAtkPokemon = data.stats[3].base_stat;
            let spDPokemon = data.stats[4].base_stat;
            let speedPokemon = data.stats[5].base_stat;

            let SK1 = data.abilities[0].ability.name;
            let SK2 = data.abilities[1].ability.name;
            let Height = data.height;
            let Weight = data.weight;

            pokeImage(pokeImg);
            namePokemon(nPokemon);
            tipoPokemon(tPokemon);
            hpPokemon(healthPokemon);
            atkPokemon(aPokemon);
            defPokemon(dPokemon);
            sAPokemon(spAtkPokemon);
            sDPokemon(spDPokemon);
            velPokemon(speedPokemon);

            SK1Pokemon(SK1);
            SK2Pokemon(SK2);
            HTPokemon(Height);
            WTPokemon(Weight);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const namePokemon = (url) => {
    document.getElementById("nombreP").innerHTML = url;
}
const tipoPokemon = (url) => {
    document.getElementById("tipo").innerHTML = url;
}

const hpPokemon = (url) => {
    document.getElementById("HP").innerHTML = url;
}

const atkPokemon = (url) => {
    document.getElementById("atk").innerHTML = url;
}

const defPokemon = (url) => {
    document.getElementById("def").innerHTML = url;
}

const sAPokemon = (url) => {
    document.getElementById("sATK").innerHTML = url;
}

const sDPokemon = (url) => {
    document.getElementById("sDEF").innerHTML = url;
}

const velPokemon = (url) => {
    document.getElementById("Speedo").innerHTML = url;
}

const SK1Pokemon = (url) => {
    document.getElementById("skill1").innerHTML = url;
}

const SK2Pokemon = (url) => {
    document.getElementById("skill2").innerHTML = url;
}

const HTPokemon = (url) => {
    document.getElementById("Ht").innerHTML = url;
}

const WTPokemon = (url) => {
    document.getElementById("Wg").innerHTML = url;
}






