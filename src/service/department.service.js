import http from '../http-common';

export const getAll = () => http.get('/departments');

export const get = (id) => http.get(`/departments/${id}`);

export const create = (data) => http.post('/departments', data);

export const editById = (id, data) => http.put(`/departments/${id}`, data);

export const deleteById = (id) => http.delete(`/departments/${id}`);
