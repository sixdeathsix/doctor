import {$axios} from "./index.js";

class OrderApi {

    createOrder(orderdata) {
        return $axios.post("api/createorder/", orderdata);
    }

    cancelOrder(id) {
        return $axios.delete(`api/orders/${id}/`);
    }

}

export default new OrderApi();