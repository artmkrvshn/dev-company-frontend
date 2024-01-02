import http from '../http-common';

export const getAll = () => http.get('/statuses');

export const get = (id) => http.get(`/statuses/${id}`);

export const create = (data) => http.post('/statuses', data);

export const editById = (id, data) => http.put(`/statuses/${id}`, data);

export const deleteById = (id) => http.delete(`/statuses/${id}`);
