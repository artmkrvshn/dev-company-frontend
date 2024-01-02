import http from '../http-common';

export const getAll = () => http.get('/projects');

export const get = (id) => http.get(`/projects/${id}`);

export const create = (data) => http.post('/projects', data);

export const editById = (id, data) => http.put(`/projects/${id}`, data);

export const deleteById = (id) => http.delete(`/projects/${id}`);
