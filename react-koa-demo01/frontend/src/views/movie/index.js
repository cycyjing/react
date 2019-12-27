import React, { useEffect, memo } from "react";
import { connect } from "react-redux";
import { notification, Button, Alert } from "antd";
import { getMovie, errorHappen, errorConfirm } from "../../store/action";
const mapState = state => {
  return {
    movies: state.movieReducer.get("movies"),
    isError: state.errorReducer.get("isError"),
    errMsg: state.errorReducer.get("errMsg"),
    statusCode: state.errorReducer.get("statusCode"),
    hasMentioned: state.errorReducer.get("hasMentioned")
  };
};
const isEquelRender = (preProps, nextProps) => {
  return preProps.movies.equals(nextProps.movies);
};
const MovieRenderMemo = props => {
  //组件
  const handleClose=()=>{
    props.errorConfirm();
  }
  const handleError = () => {
    //触发事件   porps
    props.errorHappen({ message: "dfdf", statusCode: "200" });
  };
  const openNotification = (statusCode, errMsg) => {
    notification.open({
      message: statusCode,
      description: errMsg,
      onClick: () => {
        props.errorConfirm();
      },
      onClose: () => {
        props.errorConfirm();
      }
    });
  };
  return (
    <h1>
      {console.log("props.movies", props.movies.toArray())}
      11111111111111111
      <Button onClick={handleError}>click for error tip</Button>
      {/* {props.errMsg ? openNotification(props.statusCode, props.errMsg) : ""} */}
      {props.errMsg ? (
        <Alert
          closable
          message={props.errMsg}
          type="error"
          onClose={handleClose}
        />
      ) : (
        ""
      )}
      {console.log("render")}
    </h1>
  );
};
const MovieRender = connect(
  mapState,
  { errorHappen, errorConfirm }
)(MovieRenderMemo);

const isEquel = (preProps, nextProps) => {
  return preProps.match.params.type === nextProps.match.params.type;
};
//比较前一次后一次props是否一致，一致就不渲染（return true），不一致就渲染（return false）
const MovieMemo = memo(props => {
  useEffect(() => {
    props.getMovie(props.match.params.type);
  });
  return <MovieRender {...props} />;
}, isEquel);
//先经过memo再经过connect，memo才能察觉到变化
const Movie = connect(
  null,
  { getMovie }
)(MovieMemo);
export default Movie;
