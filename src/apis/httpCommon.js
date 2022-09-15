import axios from 'axios'
export default axios.create({
  baseURL: "https://apiharry-potter.fiqriachmada.repl.co/",
  headers: {
    "Content-type": "application/json",
  },
});
