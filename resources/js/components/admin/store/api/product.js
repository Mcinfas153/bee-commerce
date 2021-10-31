import axios from "axios";

const Product = {
    listProducts: (categoryId) => {
        return axios.get(`/api/category/${categoryId}/products`)
    },
    viewProduct: (productId) => {
        return axios.get(`/api/product/${productId}`)
    }
}

export default Product