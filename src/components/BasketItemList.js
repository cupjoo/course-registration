import React from "react";
import BasketItem from "./BasketItem";

const basketItems = [
  {
    title: "인스타그램 클론으로 배우는 프론트엔드 테크닉",
    img: "instagram.png",
    startDate: "2020/01/01",
    endDate: "2020/01/30",
    lecturer: "쌍문동 파퀴아오"
  },
  {
    title: "MobX를 통한 상태관리 정복하기!",
    img: "mobx.png",
    startDate: "2020/02/01",
    endDate: "2020/02/30",
    lecturer: "노원구 피바다"
  }
];

const BasketItemList = () => {
  const itemList = basketItems.map(item => (
    <BasketItem item={item} key={item.title} />
  ));
  return <div className="row">{itemList}</div>;
};

export default BasketItemList;
