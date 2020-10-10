import * as actionType from "./actionType";
import { useDispatch } from "react-redux";
import { useCallback } from 'react'
export const useInitData = (url) => {
  const dispatch = useDispatch();
  return useCallback(
    async () => {
      const result = await fetch(url)
      const resJSON = await result.json()
      console.log(resJSON)
      dispatch({
        payload: { initData: resJSON },
        type: actionType.INIT_DATA
      })
    }, [url, dispatch],
  )
}
export const useQ1Action = () => {
  const dispatch = useDispatch();
  return (text) =>
    dispatch({
      payload: {
        q1Answer: text,
      },
      type: actionType.CHANGED_Q1,
    });
};
export const useQ2Action = () => {
  const dispatch = useDispatch();
  return (text) =>
    dispatch({
      payload: {
        q2Answer: text,
      },
      type: actionType.CHANGED_Q2,
    });
};
export const useQ3Action = () => {
  const dispatch = useDispatch();
  return (text) =>
    dispatch({
      payload: {
        q3Answer: text,
      },
      type: actionType.CHANGED_Q3,
    });
};
export const useQ4Action = () => {
  const dispatch = useDispatch();
  return (text) =>
    dispatch({
      payload: {
        q4Answer: text,
      },
      type: actionType.CHANGED_Q4,
    });
};
export const useQ5Action = () => {
  const dispatch = useDispatch();
  return (text) =>
    dispatch({
      payload: {
        q5Answer: text,
      },
      type: actionType.CHANGED_Q5,
    });
};
export const useConfirmAction = () => {
  const dispatch = useDispatch();
  return () =>
    dispatch({
      type: actionType.CONFIRM_QS,
    });
};