// cohort code
const COHORT = "2503-FTB-ET-WEB-AM";
// API URL
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`;

// place holder for players
const state = {
  puppies: [],
  currentPuppy: {},
  puppyId: {},
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
    const json = await response.json();

    const data =  {

    }
  } catch (error) {
    console.log(error);
  }
}








//initialize the app
const init = async () => {
  await fetchAllPuppies();
};


init();
