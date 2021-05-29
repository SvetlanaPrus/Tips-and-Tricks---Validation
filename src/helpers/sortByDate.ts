// Хелпер функция для сортировки дат.
export const sortByDate = (a, b) => {
    return new Date(b.created).getTime() - new Date(a.created).getTime();
};
