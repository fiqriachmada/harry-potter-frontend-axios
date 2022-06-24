// import http from "./httpCommon";

import axios from 'axios'

const baseURL = 'https://harry-potter-api.fiqriachmada.repl.co/characters'

const getCharacterList = () => axios.get(baseURL)

const getCharacterById = id => axios.get(`${baseURL}/${id}`)

// const getListBook = () => http.get(`${baseURL}`);

// const getBookById = (id) => http.get(`${baseURL}/${id}`);

// const createBook = (payload) => http.post(`${baseURL}`, payload);

// const updateBook = (id, payload) => http.put(`${baseURL}/${id}`, payload);

// const deleteBook = (id) => http.delete(`${baseURL}/${id}`);

export { getCharacterList, getCharacterById }
