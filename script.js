// cohort code
const COHORT = "2503-FTB-ET-WEB-AM";
// API URL
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT}/players`;

// place holder for players
const state = {
  players: [],
};

//fetch all players from api
const fetchAllPlayers = async () => {
  try {
    const response = await fetch(API_URL);
    const { data } = await response.json();
    state.players = data.players;
    renderPlayers();
  } catch (error) {
    console.log(error);
  }
};
