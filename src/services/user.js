import {$axios} from "./index.js";

class UserApi {

    login(userdata) {
        return $axios.post("api/token/", userdata);
    }

    register(userdata) {
        return $axios.post("api/createuser/", userdata);
    }

    userOrders(id) {
        return $axios.get(`api/users/${id}/`)
    }

}

export default new UserApi();