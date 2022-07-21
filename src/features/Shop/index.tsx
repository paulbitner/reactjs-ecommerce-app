import React from "react";
import style from "styles/SiteHeaderMain.module.css";
import MaxContentWidth from "components/Layout/MaxWidthContainer";
import ShopGrid from "./components/ShopGrid";
import Loading from "components/Layout/Loading"

import { useGroups } from "./api/getShop";

const Shop = () => {
  const shopQuery = useGroups();

  if (shopQuery.isLoading) {
    return <MaxContentWidth><Loading></Loading></MaxContentWidth>;
  }

  if (!shopQuery.data) return <div>Error: API server is offline</div>;
  return (
    <>
      <MaxContentWidth>
        <ShopGrid data={shopQuery.data} />
      </MaxContentWidth>
    </>
  );
};

export default Shop;
