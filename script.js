// cohort code
const COHORT = "2503-FTB-ET-WEB-AM";
// API URL
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`;

// place holder for players
const state = {
  puppies: [],
  currentPuppy: {},
};

const $selectPuppyContainer = document.getElementById(
  "selected-puppy-container"
);

//window.addEventListener("hashchange", selectPuppy);

const selectPuppy = () => {
  getEventFromHash();
  renderPuppyDetails();
};

const getEventFromHash = () => {
  const id = window.location.hash.slice(1);

  state.currentPuppy = state.puppies.find((puppy) => puppy.id === +id);
};

//fetch all players from api
const fetchAllPuppies = async () => {
  try {
    const response = await fetch(API_URL);
    const { data } = await response.json();
    state.puppies = data.players;
    renderPuppies();
  } catch (error) {
    console.log(error);
  }
};

//render puppies
const renderPuppies = () => {
  const puppiesContainer = document.getElementById("puppy-list-container");
  const puppyList = state.puppies;

  //checks if there are puppies to display
  if (puppyList.length === 0 || !puppyList) {
    puppiesContainer.innerHTML = "<p>No puppies available</p>";
    return;
  }

  puppyList.forEach((puppy) => {
    const puppyListCard = document.createElement("div");
    puppyListCard.classList.add("puppy-list-card");
    puppyListCard.innerHTML = `
      <button><strong>${puppy.name}</strong></button>`;

    puppiesContainer.appendChild(puppyListCard);
  });
};

const getPuppyData = async (puppy) => {
  try {
    const response = await fetch(`${API_URL}/${puppy.id}`);
    const { data } = await response.json();

    //resets current puppy data
    state.currentPuppy = {};
    const info = {
      id: data.player.id,
      name: data.player.name,
      breed: data.player.breed,
      age: data.player.age,
      imageUrl: data.player.imageUrl,
      description: data.player.description,
    };
    state.currentPuppy.push(info);

    return info;
  } catch (error) {
    console.log(error);
  }
};

const makePuppyCard = () => {
  if (!state.curretPuppy) {
    return;
  }

  // create each element for the cards
  const { id, name, breed, age, imageUrl, description } = state.currentPuppy;
  const nameh3 = document.createElement("h2");
  const breedP = document.createElement("p");
  const ageP = document.createElement("p");
  const image = document.createElement("img");
  const des = document.createElement("p");
  const btn = document.createElement("button");

  //add id to each element
  nameh3.id = "name"
  breedP.id = "breed"
  ageP.id = "age"
  image.id = "image"
  des.id = "description"
  btn.id = "deleteButton"

  

  
};

//initialize the app
const init = async () => {
  await fetchAllPuppies();

  //selectPuppy();
};

init();
