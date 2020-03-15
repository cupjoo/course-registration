import React, { Fragment } from 'react'
import { inject, observer } from 'mobx-react';

const TotalCount = ({ total }) => {
  return (
    <Fragment>
      { total }
    </Fragment>
  )
}

export default inject(({ register }) => ({
  total: register.total
}))(observer(TotalCount));
