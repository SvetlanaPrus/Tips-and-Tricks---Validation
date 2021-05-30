// @ts-nocheck
/* Core */
import { waait } from 'waait';
import { useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

/* Instruments */
import { api } from '../../api';

export const useTipById = (id) => {
    const navigate = useNavigate();
    const client = useQueryClient();

    return useQuery(['tips', id],
        async () => {
            const tipById = await api.getTipById(id);
            console.log(tipById);
            await waait(2000);

            return tipById;
        },
        {
            placeholderData() {
                // const tipToView = client.getQueryData('tips')?.filter((tip) => tip.id === id)[ 0 ];
                console.log(tipToView, client.getQueryData('tips'));

                return (
                    tipToView ?? {
                        body: 'Загрузка...',
                    }
                );
            },
            onError() {
                navigate('/');
            },
            retry:      2,
            retryDelay: 2000,
        });
};
