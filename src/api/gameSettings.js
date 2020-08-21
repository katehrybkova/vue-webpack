import axios from "axios";

export const getGameModes = () =>
  axios.get(`https://starnavi-frontend-test-task.herokuapp.com/game-settings`);
