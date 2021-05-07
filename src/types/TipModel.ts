export interface TipModel {
    id: string;
    title: string;
    preview: string;
    body: string;
    author: string;
    tag: {
        id: string;
        name: string;
    };
    created: string;
}
