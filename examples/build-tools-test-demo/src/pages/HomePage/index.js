import React, { useEffect } from "react";

import css from "./index.less";


export default function HomePage() {
  useEffect(()=>{
    (async ()=>{
      const response=await fetch("/test1");
      const json=await response.json();
      console.log(json);
    })();
  });
  return (
    <div>
      <div className={css["home-page"]}>Hello Words</div>
    </div>)
};

HomePage.defaultProps = {

};