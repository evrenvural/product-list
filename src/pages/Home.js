// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect } from "react";
import * as style from "./Home.style";
import * as itemActions from "../redux/item/item.actions";
import { useDispatch, useSelector } from "react-redux";
import RadioFilter from "../components/RadioFilter/RadioFilter";
import CheckboxFilter from "../components/CheckboxFilter/CheckboxFilter";
import SelectItem from "../components/SelectItem/SelectItem";
import ProductList from "../components/ProductList/ProductList";
import { Container, Grid } from "@mantine/core";
import { GLOBAL_STYLE } from "../utils/styleUtils";
import COMPANIES from "../utils/companies";
import TAGS from "../utils/tags";
import _ from "lodash";

function Home() {
  const dispatch = useDispatch();

  const items = useSelector((state) => state.item.items);
  const totalItemCount = useSelector((state) => state.item.totalItemCount);
  const filter = useSelector((state) => state.item.filter);

  const brandOptions = _.map(COMPANIES, (company) => ({
    label: company.name,
    value: company.slug,
  }));

  const tagOptions = _.map(TAGS, (tag) => ({
    label: tag,
    value: tag,
  }));

  useEffect(() => {
    dispatch(itemActions.GetItems.request());
  }, []);

  return (
    <Container size="xl" css={style.container}>
      <Grid>
        <Grid.Col md={12} lg={3}>
          <RadioFilter
            onChange={(sortAndOrder) =>
              dispatch(itemActions.ChangeFilter.request({ sortAndOrder }))
            }
            value={filter.sortAndOrder}
          />
          <div css={GLOBAL_STYLE.mb(24)} />
          <CheckboxFilter
            label="Brands"
            options={brandOptions}
            searchPlaceholder="Search brand"
            onChange={(checkedBrands) =>
              dispatch(itemActions.ChangeFilter.request({ checkedBrands }))
            }
            values={filter.checkedBrands}
          />
          <div css={GLOBAL_STYLE.mb(24)} />
          <CheckboxFilter
            label="Tags"
            options={tagOptions}
            searchPlaceholder="Search tag"
            onChange={(checkedTags) =>
              dispatch(itemActions.ChangeFilter.request({ checkedTags }))
            }
            values={filter.checkedTags}
          />
        </Grid.Col>
        <Grid.Col md={12} lg={6}>
          <ProductList
            onPageChanged={(selectedPage) =>
              dispatch(itemActions.ChangeFilter.request({ page: selectedPage }))
            }
            page={filter.page}
            list={items}
            totalListLength={totalItemCount}
            onTypeFilterChange={(selectedType) =>
              dispatch(itemActions.ChangeFilter.request({ type: selectedType }))
            }
            typeFilterValue={filter.type}
          />
        </Grid.Col>
        <Grid.Col md={12} lg={3}>
          <SelectItem />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Home;
