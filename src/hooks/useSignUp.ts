// @ts-nocheck
/* Core */
import { useMutation, useQueryClient } from 'react-query';

/* Other */
import { api } from '../api';

export const useSignUp = () => {
    const client = useQueryClient();

    return useMutation(
        (credentials) => {
            return api.signUp(credentials);
        },

        {
            onError(error) {
                console.log('useSignUp error', error);
            },
            onSuccess(credentials) {
                client.invalidateQueries('/auth/registration');
                localStorage.setItem('token', credentials.token);
            },
        },
    );
};
