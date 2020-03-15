import React, { Fragment } from "react";
import CardItem from "./CardItem";

const BasketItem = ({ item, onTake }) => {
  const cancelBtn = (
    <button className="btn btn-warning"
      onClick={() => onTake(item.title)}>수강 취소하기</button>
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
