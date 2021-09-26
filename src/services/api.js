import axiosInstance from './axiosInstance';

export const fetchCharacters = (page) => axiosInstance.get(`character?page=${page}`);

export const fetchEpisodes = (ids) => axiosInstance.get(`episode/${ids.join(',')}`);
