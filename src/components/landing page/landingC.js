import React, { useState, useEffect } from "react";
import "./landing.component.css";
import Form from "./Form";
export default function LandingC() {
  const [data, setData] = useState();
  const getUserInfo = (data) => {
    setData(data);
    console.log(data);
  };

  return (
    <div className="lad">
      hello
      <Form onSubmit={getUserInfo} />
    </div>
  );
}
