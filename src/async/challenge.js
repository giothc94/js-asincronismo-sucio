const fetch = require("../utils/fetchData");

const API = "https://rickandmortyapi.com/api/character/";

function Character({ count, name, origin }) {
  this.countCharacters = count;
  this.name = name;
  this.origin = origin;
}

const anotherFunction = async () => {
  try {
    const data = await fetch(API);
    const {
      info: { count }
    } = data;
    const character = await fetch(`${API}${data.results[0].id}`);
    const origin = await fetch(character.origin.url);
    let result = new Character({
      count: count,
      name: character.name,
      origin: origin.dimension
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
anotherFunction();
