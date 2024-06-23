import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRequestStatus } from "../redux/ui/request/selectors";
import { useDispatch } from "react-redux";
import { useCallback } from "react";

export const useLazyRequest = (thunk) => {
  const [request, setRequest] = useState();
  const status = useSelector((state) =>
    selectRequestStatus(state, request?.requestId)
  );

  const dispatch = useDispatch();

  const makeRequest = useCallback(
    (...params) => {
      setRequest(dispatch(thunk(...params)));
    },
    [dispatch, thunk]
  );

  return [status, makeRequest];
};
