import { LOAD_STATUSES } from '../../constants';

export const getCategoryPageSelectors = (state) => state.categoryPage;
export const getLoadStatusSelector = (state) => getCategoryPageSelectors(state).loadStatus;
export const getCategoryPage = (state) => getCategoryPageSelectors(state).data;

export const getIsLoadingSeletor = (state) => {
    return getLoadStatusSelector(state) === LOAD_STATUSES.LOADING;
}
export const getIsLoadedSeletor = (state) => {
    return getLoadStatusSelector(state) === LOAD_STATUSES.LOADED;
}
export const getIsErrorSeletor = (state) => {
    return getLoadStatusSelector(state) === LOAD_STATUSES.ERROR;
}