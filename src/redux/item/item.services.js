import _ from "lodash";
import axios from "../../configs/axios";
import BaseService from "../../configs/BaseService";
class ItemService extends BaseService {
  get = (filter) => {
    const [sort, order] = _.split(filter.sortAndOrder, ",");

    return axios.get(this.URL, {
      params: {
        itemType: filter.type,
        manufacturer: filter.checkedBrands,
        tags: filter.checkedTags,
        _sort: sort,
        _order: order,
        _limit: 16,
        _page: filter.page,
      },
    });
  };
}

export default new ItemService("/items");
