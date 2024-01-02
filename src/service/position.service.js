import http from '../http-common';

export const getAll = () => http.get('/positions');

export const get = (id) => http.get(`/positions/${id}`);

export const create = (data) => http.post('/positions', data);

export const editById = (id, data) => http.put(`/positions/${id}`, data);

export const deleteById = (id) => http.delete(`/positions/${id}`);
