import React from 'react'
import RegistrationTemplate from './RegistrationTemplate'
import CourseItemList from './CourseItemList'
import BasketItemList from './BasketItemList'

const Registration = () => {
  return (
    <RegistrationTemplate
      basketItems={<BasketItemList/>}
      courseItems={<CourseItemList/>}
    />
  )
}

export default Registration
