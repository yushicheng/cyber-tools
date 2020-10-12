/* eslint-disable react/prop-types */
import React from "react";


class BasicLayout extends React.Component{

  constructor(props){
    super(props);
    this.state={};
  };

  render() {
    const { children } = this.props;
    return children;
  };

};

export default BasicLayout;
