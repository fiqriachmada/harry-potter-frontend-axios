import http from './httpCommon'

const baseURL = '/characters'

const createCharacter = data => http.post(`${baseURL}`, data)

const getCharacterList = () => http.get(baseURL)

const getCharacterById = id => http.get(`${baseURL}/${id}`)

const updateCharacter = (data, id) => http.put(`${baseURL}/${id}`, data)

const deleteCharacter = id => http.delete(`${baseURL}/${id}`)

export {
  getCharacterList,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter
}
