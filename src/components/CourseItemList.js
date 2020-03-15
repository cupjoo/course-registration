import React from "react";
import CourseItem from "./CourseItem";
import { inject, observer } from 'mobx-react';

const CourseItemList = ({ items, onPut }) => {
  const itemList = items.map(item => 
    <CourseItem 
      item={item} 
      key={item.title} 
      onPut={onPut}
    />
  );
  return <div className="row">{itemList}</div>;
};

export default inject(({ register }) => ({
  items: register.courseItems,
  onPut: register.put,
}))(observer(CourseItemList));
