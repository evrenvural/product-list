import axios from "../../configs/axios";
import BaseService from "../../configs/BaseService";

class ItemService extends BaseService {
  get = () => {
    return axios.get("items?_page=7&limit=10");
  };
}

export default new ItemService("/playedSongHistory");
