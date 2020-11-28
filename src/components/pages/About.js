import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>About This App</h1>
      <p>App to search Github users</p>
      <h1>Developer : vijay</h1>
      <span className="inline">
        <h4>image</h4>
        <img
          src="https://avatars2.githubusercontent.com/u/66003036?v=4"
          alt="vijay"
          className="vijay"
        />
      </span>
      <p>Version: 1.0.0</p>
    </Fragment>
  );
};

export default About;
