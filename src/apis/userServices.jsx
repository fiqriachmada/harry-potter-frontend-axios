import http from './httpCommon';

const baseURL = '/users';

const registerUser = (data) => http.post(`${baseURL}/`, data);

const loginUser = (data) => http.post(`${baseURL}/login`, data);


// const getCharacterList = (page) => http.get(`${baseURL}?page=${page}`);

// const getCharacterSpecies = () => http.get(`/species`);

// const getCharacterHouses = () => http.get(`/house`);

// const getCharacterById = (id) => http.get(`${baseURL}/${id}`);

// const updateCharacter = (data, id) => http.put(`${baseURL}/${id}`, data);

// const deleteCharacter = (id) => http.delete(`${baseURL}/${id}`);

export { loginUser, registerUser };
