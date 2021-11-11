import axios from "axios";

const Category = {
    listAll: () => {          // used to populate dropdowns
        return axios.get('/api/categories');
    },
    getProducts: (categoryId) => {
        return axios.get(`/api/category/${categoryId}/products`);
    }
}
export default Category;