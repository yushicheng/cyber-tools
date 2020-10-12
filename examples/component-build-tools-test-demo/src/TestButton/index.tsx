import React, { ReactNode } from "react";
import style from "./index.less";


class TestComponent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  };
  public render(): ReactNode {
    const { children } = this.props;
    return (
      <div className={style.testComponent}>
        {children}
      </div>)
  };
};


export default TestComponent;