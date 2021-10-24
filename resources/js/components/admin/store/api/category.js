import axios from "axios";

const Category = {
    listAll: () => {          // used to populate dropdowns
        return axios.get('/categories');
    }
};
export default Category;