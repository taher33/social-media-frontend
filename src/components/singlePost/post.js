import React from "react";
import Cards from "../home/Cards";
import Comment from "../comment/comment";

export default function Post() {
  return (
    <div>
      <Cards clicked={null} />
      <Comment />
      <Comment />
    </div>
  );
}
