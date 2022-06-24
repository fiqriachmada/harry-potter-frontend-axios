import axios from 'axios'

const baseURL = 'https://harry-potter-api.fiqriachmada.repl.co/characters'

const getCharacterList = () => axios.get(baseURL)

const getCharacterById = id => axios.get(`${baseURL}/${id}`)

const createCharacter = payload => axios.post(`${baseURL}`, payload)

const updateCharacter = (payload,id) => axios.put(`${baseURL}/${id}`, payload)

// const deleteBook = (id) => http.delete(`${baseURL}/${id}`);

export { getCharacterList, getCharacterById, createCharacter, updateCharacter }
