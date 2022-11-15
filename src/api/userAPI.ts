import axios from "axios";
import User from "../interfaces/User";

const userAPI = {
  fetchOne(id: number) {
    // TODO: url from env
    return axios.get<User>(`url${id}`);
  },
};

export default userAPI;
