import { LOAD_STATUSES } from '../../constants';

export const getCategoriesSelector = (state) => state.categories;
export const getLoadStatusSelector = (state) => getCategoriesSelector(state).loadStatus;
export const getCategories = (state) => getCategoriesSelector(state).categories;

export const getIsLoadingSeletor = (state) => {
    return getLoadStatusSelector(state) === LOAD_STATUSES.LOADING;
}
export const getIsLoadedSeletor = (state) => {
    return getLoadStatusSelector(state) === LOAD_STATUSES.LOADED;
}
export const getIsErrorSeletor = (state) => {
    return getLoadStatusSelector(state) === LOAD_STATUSES.ERROR;
}