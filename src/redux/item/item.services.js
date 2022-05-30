import _ from "lodash";
import axios from "../../configs/axios";
import BaseService from "../../configs/BaseService";
class ItemService extends BaseService {
  get = (filter) => {
    let url = `${this.URL}/?`;

    if (filter.type) url += `itemType=${filter.type}&`;
    if (filter.sortAndOrder) {
      const [sort, order] = filter.sortAndOrder.split(",");
      url += `_sort=${sort}&_order=${order}&`;
    }
    if (!_.isEmpty(filter.checkedBrands)) {
      filter.checkedBrands.forEach((brand) => {
        url += `manufacturer=${brand}&`;
      });
    }
    if (!_.isEmpty(filter.checkedTags)) {
      filter.checkedTags.forEach((brand) => {
        url += `tags=${brand}&`;
      });
    }
    if (filter.page) url += `_page=${filter.page}&_limit=16&`;

    return axios.get(url);
  };
}

export default new ItemService("/items");
