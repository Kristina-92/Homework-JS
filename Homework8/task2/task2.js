const dataContainer = document.getElementById("data-container");

const fetchData = async () => {
  const url = "https://rickandmortyapi.com/api/character";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Data access was not successful!");
    }
    const data = await response.json();
    showCharacters(data);
  } catch (error) {
    console.error(error);
    dataContainer.innerHTML = "<h1 id='error'>Data not found! Try again!</h1>";
  }
};

function showCharacters(data) {
  data.results.forEach((character) => {
    const card = document.createElement("div");
    card.classList.add("card-container");
    const img = document.createElement("img");
    img.src = character.image;
    img.alt = character.name;
    img.classList.add("card-img");

    const divCharacterInfo = document.createElement("div");
    divCharacterInfo.classList.add("character-info");

    const characterName = document.createElement("h2");
    characterName.classList.add("character-name");
    characterName.textContent = character.name;

    const characterGender = document.createElement("p");
    characterGender.textContent = `Gender: ${character.gender}`;

    const characterStatus = document.createElement("p");
    characterStatus.textContent = `Status: ${character.status}`;

    if (character.status === "Dead") {
      characterStatus.classList.add("status-dead");
    } else if (character.status === "Alive") {
      characterStatus.classList.add("status-alive");
    } else {
      characterStatus.classList.add("status-unknown");
    }

    const characterEpisodes = document.createElement("p");
    characterEpisodes.textContent = `No. of Episodes: ${character.episode.length}`;

    divCharacterInfo.appendChild(characterName);
    divCharacterInfo.appendChild(characterGender);
    divCharacterInfo.appendChild(characterStatus);
    divCharacterInfo.appendChild(characterEpisodes);

    card.appendChild(img);
    card.appendChild(divCharacterInfo);

    dataContainer.appendChild(card);
  });
}

fetchData();
