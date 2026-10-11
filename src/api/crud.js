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
  getById: (url, requiresAuth = true) => {
    return api.get(`${url}`, {
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
  put: (url, data, requiresAuth = true) => {
    return api.put(`${url}}`, data, {
      requiresAuth,
    });
  },

  // PATCH
  patch: (url, data, requiresAuth = true) => {
    return api.patch(`${url}`, data, {
      requiresAuth,
    });
  },

  // DELETE
  delete: (url, requiresAuth = true) => {
    return api.delete(`${url}`, {
      requiresAuth,
    });
  },

};

export default CRUD;