import React from "react";
import BasketItem from "./BasketItem";
import { inject, observer } from "mobx-react";

const BasketItemList = ({ items, onTake }) => {
  const itemList = items.map(item => (
    <BasketItem 
      item={item}
      key={item.title}
      onTake={onTake}
    />
  ));
  return <div className="row">{itemList}</div>;
};

export default inject(({ register }) => ({
  items: register.selectedItems,
  onTake: register.take
}))(observer(BasketItemList));
