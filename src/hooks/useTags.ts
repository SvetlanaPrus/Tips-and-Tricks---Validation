// @ts-nocheck
import { useQuery } from 'react-query';
import { api } from '../api';

export const useTags = () => {
    return useQuery('tags', api.getTags);
};
