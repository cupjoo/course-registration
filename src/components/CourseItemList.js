import React from "react";
import CourseItem from "./CourseItem";

const items = [
  {
    title: "인스타그램 클론으로 배우는 프론트엔드 테크닉",
    img: "instagram.png",
    date: "2020-01-15"
  },
  {
    title: "MobX를 통한 상태관리 정복하기!",
    img: "mobx.png",
    date: "2020-02-15"
  },
  {
    title: "리액트 시작을 위한 ES7",
    img: "es7.png",
    date: "2020-03-15"
  },
  {
    title: "네이버 코딩테스트 대비반",
    img: "naver.png",
    date: "2020-04-15"
  },
  {
    title: "백준 기출 문제풀이",
    img: "boj.png",
    date: "2020-05-15"
  },
  {
    title: "소수 유형 알고리즘 특강",
    img: "eratosthenes.png",
    date: "2020-06-15"
  },
  {
    title: "최대공약수 유형 알고리즘 특강",
    img: "euclidean.png",
    date: "2020-07-15"
  },
  {
    title: "알고리즘 입출력 완전정복 특강",
    img: "io.png",
    date: "2020-08-15"
  }
];

const CourseItemList = () => {
  const itemList = items.map(item => 
    <CourseItem item={item} key={item.title} />
  );
  return <div>{itemList}</div>;
};

export default CourseItemList;
