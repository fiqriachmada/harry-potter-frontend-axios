import http from "./httpCommon";

const baseURL = "https://harry-potter-api.fiqriachmada.repl.co/";

const getCharacterList = () => http.get(baseURL + "/characters    ");

// const getListBook = () => http.get(`${baseURL}`);

// const getBookById = (id) => http.get(`${baseURL}/${id}`);

// const createBook = (payload) => http.post(`${baseURL}`, payload);

// const updateBook = (id, payload) => http.put(`${baseURL}/${id}`, payload);

// const deleteBook = (id) => http.delete(`${baseURL}/${id}`);

export { getCharacterList };
