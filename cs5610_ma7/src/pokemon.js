const express = require('express');
const router = express.Router();
const { v4: uuid } = require('uuid');

// replace this string with your full name
const name = "Kejian Tong"

console.log(`My name is ${name}`)

// use this list as your temporary database!
// note that it will reset every time you restart your server
const myPokemon = [{
    id: "fc10b559-872c-43cd-bad2-f02e2e0a2d58", name: "Pikachu", health: 10, level: 1
}];

router.get('/', function (req, res) {
    // return all pokemon
    return res.send(myPokemon);
});

router.post('/', (req, res) => {
    // if the pokemon name already exists in the list, return an error
    // randomly generate an id using UUID ["uuid()"]
    // randomly generate a level between 1 and 10, inclusive, if none is given
    // randomly generate a health between 10 and 100, inclusive, if none is given
    // insert your pokemon into the myPokemon list
    // return a 200
    const level = req.query.level;
    const health = req.query.health;
    const name = req.query.name;

    const foundPokemon = myPokemon.find(pokemon => pokemon.name === name);

    if (foundPokemon) return res.send({ error: name + ' already exists in the list' });

    const randomUUID = uuid();

    const newLevel = level === undefined ? Math.floor(Math.random() * 10) + 1 : level;
    const newHealth = health === undefined ? Math.floor(Math.random() * 91) + 10 : health;

    const newPokemon = {
        id: randomUUID,
        name: name,
        health: newHealth,
        level: newLevel
    };
    myPokemon.push(newPokemon);

    return res.status(200).send(myPokemon + "insert seccessfully");
});

router.get('/:pokemonId', function (req, res) {
    // return pokemon if one is found matching the pokemonId
    // return a 404 if no pokemon matches that pokemonId
    const pokemonQuery = req.params.pokemonId;
    let foundPokemon = null;
    for (let pokemon of myPokemon) {
        if (pokemon.id === pokemonQuery) {
            foundPokemon = pokemon;
            return res.send(foundPokemon);
        }
    }
    return res.status("404").send({ error: 'No pokemon found!' });

});

router.put('/:pokemonId', function (req, res) {
    // update the pokemon matching the pokemonId
    // based on the req body
    // return a 404 if no pokemon matches that pokemonId  

    const pokemonQuery = req.params.pokemonId;
    const idx = myPokemon.findIndex(pokemon => pokemon.id === pokemonQuery);
    const { name, health, level } = req.body;


    if (idx >= 0) {
        myPokemon[idx] = {
            id: pokemonQuery,
            name: name !== undefined ? req.body.name : myPokemon[idx].name,
            health: health !== undefined ? parseInt(req.body.health) : myPokemon[idx].health,
            level: level !== undefined ? parseInt(req.body.level) : myPokemon[idx].level
        }
        JSON.stringify(myPokemon)
        // return res.send(JSON.stringify(myPokemon) + ' Update successfully');
        return res.send(myPokemon)
    }
    console.log(myPokemon)
    return res.status(404).send('no pokemon matches that' + pokemonQuery);
})

router.delete('/:pokemonId', function (req, res) {
    // delete pokemon if pokemonId matches the id of one
    // return 200 even if no pokemon matches that Id
    const pokemonQuery = req.params.pokemonId;
    const idx = myPokemon.findIndex(pokemon => pokemon.id === pokemonQuery);
    if (idx >= 0) {
        myPokemon.splice(idx, 1);
        return res.status(200).send('deleted');
    }
    return res.status(200).send('no pokenmon matches');


})

module.exports = router;