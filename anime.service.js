import axios from "axios";

export const getAnime = () => {
  return axios
    .get("https://api.jikan.moe/v4/anime")
    .then((res) => res.data.data) 
    .catch((err) => {
      console.log(err);
      throw err; 
    });
};
