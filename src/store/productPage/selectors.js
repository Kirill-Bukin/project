import { LOAD_STATUSES } from '../../constants';

export const getProductPageSelector = (state) => state.productPage;
export const getLoadStatusSelector = (state) => getProductPageSelector(state).loadStatus;
export const getProductPage = (state) => getProductPageSelector(state).data;

export const getIsLoadingSeletor = (state) => {
    return getLoadStatusSelector(state) === LOAD_STATUSES.LOADING;
}
export const getIsLoadedSeletor = (state) => {
    return getLoadStatusSelector(state) === LOAD_STATUSES.LOADED;
}
export const getIsErrorSeletor = (state) => {
    return getLoadStatusSelector(state) === LOAD_STATUSES.ERROR;
}