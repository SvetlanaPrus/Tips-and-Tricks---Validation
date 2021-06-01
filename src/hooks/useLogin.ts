// @ts-nocheck
/* Core */
import { useMutation } from 'react-query';

/* Other */
import { api } from '../api';

export const useLogin = () => {
    return useMutation((credentials) => {
        return api.login(credentials);
    },
    {
        onError(error) {
            console.log('useLogin error', error);
        },
    });
};
