// @ts-nocheck
import { useQuery } from 'react-query';
import { api } from '../api';

export const useTips = () => {
    return useQuery('tips', api.getTips);
};

