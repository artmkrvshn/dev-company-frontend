import http from '../http-common';

export const getAll = () => http.get('/employees');

export const get = (id) => http.get(`/employees/${id}`);

export const create = (data) => http.post('/employees', data);

export const editById = (id, data) => http.put(`/employees/${id}`, data);

export const deleteById = (id) => http.delete(`/employees/${id}`);
