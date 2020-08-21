import axios from "axios";

export const getWinners = () =>
  axios.get(`https://starnavi-frontend-test-task.herokuapp.com/winners`);

export const postWinner = (obj) =>
  axios.post(`https://starnavi-frontend-test-task.herokuapp.com/winners`, obj);
