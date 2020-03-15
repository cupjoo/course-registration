import React, { Fragment } from "react";
import CardItem from "./CardItem";

const CourseItem = ({ item }) => {
  const regBtn = (
    <button className="btn btn-primary">수강 신청하기</button>
  );
  return (
    <Fragment>
      <CardItem
        item={item} 
        btn={regBtn}
      />
    </Fragment>
  );
};

export default CourseItem;
