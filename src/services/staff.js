import {$axios} from "./index.js";

class StaffApi {

    getStaff() {
        return $axios.get("api/staff/");
    }

}

export default new StaffApi();