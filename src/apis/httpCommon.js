import axios from 'axios'
export default axios.create({
  baseURL: "https://api-harry-potter-app.cyclic.app/",
  headers: {
    "Content-type": "application/json",
  },
});
