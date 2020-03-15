import React from 'react'
import RegistrationTemplate from './RegistrationTemplate'
import CourseItemList from './CourseItemList'
import BasketItemList from './BasketItemList'
import TotalCount from "./TotalCount";

const Registration = () => {
  return (
    <RegistrationTemplate
      basketItems={<BasketItemList/>}
      courseItems={<CourseItemList/>}
      total={<TotalCount/>}
    />
  )
}

export default Registration
