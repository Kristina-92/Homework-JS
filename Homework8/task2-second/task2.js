const dataContainer = document.getElementById("data-container");
const btnPrev = document.getElementById("prev-btn");
const btnNext = document.getElementById("next-btn");

let currentPage = 1;

const fetchData = async () => {
  const url = `https://rickandmortyapi.com/api/character?page=${currentPage}`;
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
  dataContainer.innerHTML = "";
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

  if (data.info.prev) {
    btnPrev.disabled = false;
  } else {
    btnPrev.disabled = true;
  }

  if (data.info.next) {
    btnNext.disabled = false;
  } else {
    btnNext.disabled = true;
  }
  console.log(data.info.prev);
}

function previousBtnFunctionality() {
  if (currentPage > 0) {
    currentPage--;
    fetchData();
  }
}
function nextBtnFunctionality() {
  currentPage++;
  fetchData();
}

btnPrev.addEventListener("click", previousBtnFunctionality);
btnNext.addEventListener("click", nextBtnFunctionality);

fetchData();
