import React, { Fragment } from "react";
import CardItem from "./CardItem";

const BasketItem = ({ item }) => {
  const cancelBtn = (
    <button className="btn btn-warning">수강 취소하기</button>
  );
  return (
    <Fragment>
      <CardItem
        item={item}
        btn={cancelBtn}
      />
    </Fragment>
  );
};

export default BasketItem;
