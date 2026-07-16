import api from "./apiClient";

const CRUD = {

  // GET ALL
  getAll: (url, params = {}, requiresAuth = false) => {
    return api.get(url, {
      params,
      requiresAuth,
    });
  },

  // GET ONE
  getById: (url, id, requiresAuth = true) => {
    return api.get(`${url}/${id}`, {
      requiresAuth,
    });
  },

  // CREATE
  create: (url, data, requiresAuth = true) => {
    return api.post(url, data, {
      requiresAuth,
    });
  },

  // UPDATE
  put: (url, id, data, requiresAuth = true) => {
    return api.put(`${url}/${id}`, data, {
      requiresAuth,
    });
  },

  // PATCH
  patch: (url, id, data, requiresAuth = true) => {
    return api.patch(`${url}/${id}`, data, {
      requiresAuth,
    });
  },

  // DELETE
  delete: (url, id, requiresAuth = true) => {
    return api.delete(`${url}/${id}`, {
      requiresAuth,
    });
  },

};

export default CRUD;