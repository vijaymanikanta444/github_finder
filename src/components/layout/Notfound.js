import React, { Fragment } from 'react';
import notfound from './notfound.gif';

const Notfound = () => {
  return (
    <Fragment>
      <img src={notfound} alt="PageNotFound..." />
    </Fragment>
  );
};

export default Notfound;
