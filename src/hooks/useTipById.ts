import { useQuery } from 'react-query';
import { api } from '../api';

export const useTipById = (id) => {
    return useQuery(['tips', id], () => api.getTipById(id));
};
