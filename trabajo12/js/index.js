let pokemons = [
  {
    id: 1,
    name: "charmander",
    type: "fire",
    base_damage: 10,
    base_hp: 12,
    speed: 30,
  },
  {
    id: 2,
    name: "squirtle",
    type: "water",
    base_damage: 9,
    base_hp: 14,
    speed: 26,
  },
  {
    id: 3,
    name: "bulbasaur",
    type: "leaf",
    base_damage: 8,
    base_hp: 16,
    speed: 26,
  },
  {
    id: 4,
    name: "pikachu",
    type: "electric",
    base_damage: 12,
    base_hp: 8,
    speed: 32,
  },
  {
    id: 5,
    name: "pidgey",
    type: "air",
    base_damage: 10,
    base_hp: 10,
    speed: 35,
  },
  {
    id: 6,
    name: "goldeen",
    type: "water",
    base_damage: 9,
    base_hp: 12,
    speed: 32,
  },
  {
    id: 7,
    name: "bellsprout",
    type: "leaf",
    base_damage: 10,
    base_hp: 12,
    speed: 30,
  },
  {
    id: 8,
    name: "magnemite",
    type: "electric",
    base_damage: 9,
    base_hp: 14,
    speed: 30,
  },
  {
    id: 9,
    name: "ponyta",
    type: "fire",
    base_damage: 12,
    base_hp: 18,
    speed: 36,
  },
  {
    id: 10,
    name: "evee",
    type: "normal",
    base_damage: 10,
    base_hp: 12,
    speed: 30,
  },
];

//ordenar pokes por daño base, de menor a mayor
pokemons.sort(function (a, b) {
  return a.base_damage - b.base_damage;
});

console.log("Orden por daño");
console.log(pokemons);

//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.
//ordenar pokes tomando como atributo prop
//prop puede ser reemplazado por cualquier atributo de nuestros objetos pokemon

function sortPokemons(pokemons, prop) {
  pokemons.sort(function (a, b) {
    return b[prop] - a[prop];
  });
}

//hacemos el llamado con el argumento base_hp como prop
// se puede usar cualquier otro atributo como, speed o base_damage
sortPokemons(pokemons, "base_hp");

console.log("Orden por hp");
console.log(pokemons);

//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.
//filtramos pokemon por typo
//al hacer el llamado type se puede reemplazar por cualquiera de los tipos

function filterPokemons(pokemons, type) {
  return pokemons.filter(function (pokemon) {
    return pokemon.type === type;
  });
}

//declaramos la variable tipo fuego y pasamos el argumento fire para que reemplace a type
//y nos devuelva solo pos pokes fuego
let firePokemons = filterPokemons(pokemons, "fire");

console.log("Poke Fuego");
console.log(firePokemons);

//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.
//creamos el objeto pokemon master

let PokemonMaster = {
  id: 1,
  name: "Ash Ketchum",
  created_date: "01/01/2000",
  pokemon: [
    { id: 1, name: "Pikachu", type: "electric" },
    { id: 2, name: "Charmander", type: "fire" },
    { id: 3, name: "Squirtle", type: "water" },
  ],
};

console.log(PokemonMaster.id); // imprime 1
console.log(PokemonMaster.name); // imprime "Ash Ketchum"
console.log(PokemonMaster.created_date); // imprime "01/01/2000"
console.log(PokemonMaster.pokemon); // imprime el array de objetos

//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.
//Funcion para añadir pokemones aleatorios

function addRandomPokemon(PokemonMaster) {
  //creamos un data set de donde escoger nombres y tipos aleatorios
  let names = ["Raichu", "Charmeleon", "Basltoise", "Bulbasaur", "Jigglypuff"];
  let types = ["electric", "fire", "water", "leaf", "normal"];

  //generamos datos random para asociarlos a las variables randomName y randomType

  let randomIndex = Math.floor(Math.random() * names.length);
  let randomName = names[randomIndex];

  randomIndex = Math.floor(Math.random() * types.length);
  let randomType = types[randomIndex];

  //creamos un nuevo pokemon y le asignamos valores aleatorios
  let newPokemon = {
    id: Math.floor(Math.random() * 25) + 1,
    name: randomName,
    type: randomType,
  };

  //añadimos el pokemon al final del arrego pokemon
  PokemonMaster.pokemon.push(newPokemon);
}

console.log("añadimos poke");
addRandomPokemon(PokemonMaster);

console.log("print poke");
console.log(PokemonMaster);

//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5
//añadir daño min y max random
///loop por todos los pokes y añadimos daño random
pokemons.forEach(addRandomDamage);

function addRandomDamage(pokemons) {
  // Genera un número aleatorio entero entre 1 y 2 para min_damage
  let minDamage = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

  // Genera un número aleatorio entero entre 3 y 5 para max_damage
  let maxDamage = Math.floor(Math.random() * (5 - 3 + 1)) + 3;

  // Agrega los atributos min_damage y max_damage al objeto actual en el ciclo
  pokemons.min_damage = minDamage;
  pokemons.max_damage = maxDamage;
}

console.log("Daño añadido:");
console.log(pokemons);

//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage
function calculateDamage(pokemon) {
  return (
    pokemon.base_damage +
    Math.floor(
      Math.random() * (pokemon.max_damage - pokemon.min_damage + 1) +
        pokemon.min_damage
    )
  );
}
let damage = calculateDamage(pokemons[2]); // Calcula el daño del tercer pokemon del arreglo (bulbasaur)

console.log("El daño del pokemon es " + damage);

//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. Colocar tres pokemons con la funcion del ejercicio 5.
// El quiere que sus pokemons se ordenen de manera que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.

function sortStrongPokemons(pokemons) {
  pokemons.sort((a, b) => {
    let aValue = a.base_damage + a.max_damage;
    let bValue = b.base_damage + b.max_damage;
    return bValue - aValue;
  });
}
//
sortStrongPokemons(pokemons);

console.log("Ordenados por poder 💪");
console.log(pokemons);

//9. Crear una lista desordenada de Pokemons en nuestro documento HTML

let container = document.getElementById("container");
let ul = document.createElement("ul");

for (let i = 0; i < pokemons.length; i++) {
  let li = document.createElement("li");
  li.textContent = pokemons[i].name;
  ul.appendChild(li);
}

container.appendChild(ul);

//10. Utilizando javascript crear una tabla de pokemons con las siguientes columnas: id, name, type, base_damage, base_hp, speed

let container2 = document.getElementById("container2");
let table = document.createElement("table");

for (let i = 0; i < pokemons.length; i++) {
  let tr = document.createElement("tr");

  let tdId = document.createElement("td");
  tdId.textContent = pokemons[i].id;
  tr.appendChild(tdId);

  let tdName = document.createElement("td");
  tdName.textContent = pokemons[i].name;
  tr.appendChild(tdName);

  let tdType = document.createElement("td");
  tdType.textContent = pokemons[i].type;
  tr.appendChild(tdType);

  let tdBaseDamage = document.createElement("td");
  tdBaseDamage.textContent = pokemons[i].base_damage;
  tr.appendChild(tdBaseDamage);

  let tdBaseHp = document.createElement("td");
  tdBaseHp.textContent = pokemons[i].base_hp;
  tr.appendChild(tdBaseHp);

  let tdSpeed = document.createElement("td");
  tdSpeed.textContent = pokemons[i].speed;
  tr.appendChild(tdSpeed);

  table.appendChild(tr);
}

container.appendChild(table);
