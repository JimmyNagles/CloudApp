import axios from "axios";

const BASEURL = "https://api.spoonacular.com/recipes/random?number=10&tags=";
const APIKEY = process.env.REACT_APP_SPOON;

export default {
  search: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
};
