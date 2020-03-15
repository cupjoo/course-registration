import React from "react";
import BasketItem from "./BasketItem";

const basketItems = [
  {
    title: "인스타그램 클론으로 배우는 프론트엔드 테크닉",
    img: "instagram.png",
    date: "2020-01-15"
  },
  {
    title: "MobX를 통한 상태관리 정복하기!",
    img: "mobx.png",
    date: "2020-02-15"
  }
];

const BasketItemList = () => {
  const itemList = basketItems.map(item => (
    <BasketItem item={item} key={item.title} />
  ));
  return <div className="row">{itemList}</div>;
};

export default BasketItemList;
