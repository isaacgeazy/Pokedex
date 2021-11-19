 const urlPokemonAleatorio = () => {
     const numeroSorteado = Math.round(Math.random() * 150) + 1;
     const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${numeroSorteado}`;
     return urlPokemon;

 }
 const iniciar = async () => {
     const url = urlPokemonAleatorio();
     const response = await fetch(url);
     const result = await response.json();
     exibirPokemon(result);
 }
 const exibirPokemon = (pokemon) => {
     const imagem = window.document.getElementById('foto-pokemon');
     const texto = window.document.getElementById('nome-pokemon');

     imagem.src = pokemon.sprites.other["official-artwork"].front_default;
     texto.innerHTML = pokemon.name.toUpperCase();

 }


 document.addEventListener('DOMContentLoaded', iniciar)