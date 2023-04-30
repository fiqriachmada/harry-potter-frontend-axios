import http from './httpCommon'

const baseURL = '/characters'

const createCharacter = data => http.post(`${baseURL}`, data)

const getCharacterList = page => http.get(`${baseURL}?page=${page}`)

const getCharacterSpecies = () => http.get(`/species`)

const getCharacterHouses = () => http.get(`/house`)

const getCharacterById = id => http.get(`${baseURL}/${id}`)

const updateCharacter = (data, id) => http.put(`${baseURL}/${id}`, data)

const deleteCharacter = id => http.delete(`${baseURL}/${id}`)

export {
  getCharacterList,
  getCharacterSpecies,
  getCharacterHouses,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter
}
