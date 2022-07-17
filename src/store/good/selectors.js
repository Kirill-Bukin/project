import { getCategoriesSelector } from '../categoriesSlice/categoriesSelectors';
import { LOAD_STATUSES } from '../constants';

export const getGoodsSelector = (state) => state.goods;
export const getLoadStatusSelector = (state) => getGoodsSelector(state).loadStatus;
export const getGoods = (state) => getGoodsSelector(state).goods;

export const getIsLoadingSeletor = (state) => {
    return getLoadStatusSelector(state) === LOAD_STATUSES.LOADING;
}
export const getIsLoadedSeletor = (state) => {
    return getLoadStatusSelector(state) === LOAD_STATUSES.LOADED;
}
export const getIsErrorSeletor = (state) => {
    return getLoadStatusSelector(state) === LOAD_STATUSES.ERROR;
}

export const getMapGoods = (state) => {
    const goods = getGoods(state);
    const category = getCategoriesSelector(state);
    const { items } = goods;
    const { categories } = category;

    return items.map((item) => ({
        ...item,
        categoryLabel: 
        categories.find(({ id }) => id === item.categoryTypeId)?.label 
        ?? 'Неизвестная категория'
    })
    )
}