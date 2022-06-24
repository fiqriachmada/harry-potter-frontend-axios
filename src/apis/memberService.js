import http from "./httpCommon";

const baseURL = "/member";

const getListMember = () => http.get(`${baseURL}`);

const getMemberById = (id) => http.get(`${baseURL}/${id}`);

const createMember = (payload) =>
  http.post(`${baseURL}`, payload);

const updateMember = (id, payload) => http.put(`${baseURL}/${id}`, payload);

const deleteMember = (id, status) => http.delete(`${baseURL}/${id}/${status}`);

export {
  getListMember,
  getMemberById,
  createMember,
  updateMember,
  deleteMember,
};
