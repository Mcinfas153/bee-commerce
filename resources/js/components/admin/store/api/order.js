import axios from "axios";

const Order = {
    listOrders: () => {
        return axios.get(`/api/orders`);
    }
}
export default Order;