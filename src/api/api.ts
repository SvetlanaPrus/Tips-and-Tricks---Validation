// @ts-nocheck
/* Core */
import waait from 'waait';
import axios from 'axios';

export const api = {
    async getTags() {
        const { data: tags } = await axios.get(
            `${process.env.REACT_APP_API_URL}/tags`,
        );

        return tags;
    },
    async getTips() {
        const { data: tips } = await axios.get(
            `${process.env.REACT_APP_API_URL}/tips`,
        );

        return tips;
    },
    async getTipById(id: string) {
        const { data: tipById } = await axios.get(
            `${process.env.REACT_APP_API_URL}/tips/${id}`,
        );

        await waait(1000);
        console.log(tipById);

        return tipById;
    },
    async createTip(tip) {
        const { data: newTip } = await axios.post(
            `${process.env.REACT_APP_API_URL}/tips`,
            tip,
        );

        return newTip;
    },
};
