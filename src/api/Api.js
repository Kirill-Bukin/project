import { request } from "./request";

export class Api {
    andPoints = {
        categories: '/api/categories',
        popularCategories: '/api/popular_categories',
        goods: '/api/goods',
        
    }
    getGoods = () => {
        return request(this.andPoints.goods)
    }
    getCategories = () => {
        return request(this.andPoints.categories)
    }
    getPopularCategories = () => {
        return request(this.andPoints.popularCategories)
    }
    getGoodById = (ids) => {
        const url = this.andPoints.goods;
        return request(url, { ids })
}
};