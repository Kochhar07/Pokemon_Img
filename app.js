const container = document.querySelector('#container');
const bl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    const label = document.createElement('span');
    label.innerText = `#${i}`
    const newimg = document.createElement('img');
    newimg.src = `${bl}${i}.png`
    pokemon.append(newimg)
    pokemon.append(label)
    container.append(pokemon);
}
