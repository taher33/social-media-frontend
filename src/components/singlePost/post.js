import React from "react";
import Cards from "../home/Cards";
import Comment from "../comment/comment";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

function Post(props) {
  const history = useHistory();
  const [post] = props.posts.filter(el => {
    return el._id === props.match.params.id;
  });
  if (post === undefined) {
    history.push("/");
    return null;
  }
  return (
    <div style={{ width: "100%" }}>
      <Cards data={post} client={props.user._id} />
      {post.comments.length === 0 ? null : <Comment />}
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    posts: state.auth.posts,
    user: state.auth.user,
  };
};

export default connect(mapStatetoProps)(Post);
